<?php

/*
 * Класс Pagination для генрації посторінкової навігації
 */

class Pagination
{

    /**
     найбільша кількість на сторінці
     */
    private $max = 12;

    /**

      записуємо номер сторінки

     */
    private $index = 'page';

    /**
       карент страниц
     */
    private $current_page;

    /**
     *  загальна кількість записів
     */
    private $total;

    /**
     * 
     *  записів на сторінці
     * 
     */
    private $limit;

    /**
     *
     */
    public function __construct($total, $currentPage, $limit, $index)
    {
        # Встановлюємо загальну кількість записів
        $this->total = $total;

        # Встановлюємо кількість записів на сторінці
        $this->limit = $limit;

        # ключ урл
        $this->index = $index;

        # ксть сторінок
        $this->amount = $this->amount();
        
        # номер сторінки що вікрита
        $this->setCurrentPage($currentPage);
    }

    /**
     *  Для виводуц силок
     */
    public function get()
    {
        # Для запису силок
        $links = null;

        # ліміт для цикла
        $limits = $this->limits();
        
        $html = '<ul class="pagination">';
        # Генеруємо силкии
        for ($page = $limits[0]; $page <= $limits[1]; $page++) {
            # якщо силки нема то добавляємо клас active
            if ($page == $this->current_page) {
                $links .= '<li class="active"><a href="#">' . $page . '</a></li>';
            } else {
                # генеруємо силку
                $links .= $this->generateHtml($page);
            }
        }

        # якщо створились
        if (!is_null($links)) {
            # якщо стрінка не перша
            if ($this->current_page > 1)
            # створюєемо силку на першу
                $links = $this->generateHtml(1, '&lt;') . $links;

            # якщо не перша
            if ($this->current_page < $this->amount)
            # створюємо "На последнюю"
                $links .= $this->generateHtml($this->amount, '&gt;');
        }

        $html .= $links . '</ul>';

        # Возвращаем html
        return $html;
    }

    /**
     * для генерації штмл кода
     * пейдж номер сторінки
     */
    private function generateHtml($page, $text = null)
    {
        # Если текст ссылки не указан
        if (!$text)
        # Указуєм, шо текст - цифра сторінки
            $text = $page;

        $currentURI = rtrim($_SERVER['REQUEST_URI'], '/') . '/';
        $currentURI = preg_replace('~/page-[0-9]+~', '', $currentURI);
        # HTML код ссылки и возвращаем
        return
                '<li><a href="' . $currentURI . $this->index . $page . '">' . $text . '</a></li>';
    }

    /**


     *
     */
    private function limits()
    {
        # силки зліва
        $left = $this->current_page - round($this->max / 2);
        
        # початок відліка
        $start = $left > 0 ? $left : 1;


        if ($start + $this->max <= $this->amount) {

            $end = $start > 1 ? $start + $this->max : $this->max;
        } else {
            # кінець загальна кількість сторінок
            $end = $this->amount;

            # Начало - минус $this->max от конца
            $start = $this->amount - $this->max > 0 ? $this->amount - $this->max : 1;
        }

        # Возвращаем
        return
                array($start, $end);
    }

    /**
     щоб встановити сторінку
     */
    private function setCurrentPage($currentPage)
    {
        # отримуємо номер сторінки
        $this->current_page = $currentPage;

        # якщо більше 0
        if ($this->current_page > 0) {
            #
            if ($this->current_page > $this->amount)
            # встановлюємо на останню
                $this->current_page = $this->amount;
        } else
        # Устанавливаем страницу на первую
            $this->current_page = 1;
    }

    /**
     *для загальної кількості сторінок
     */
    private function amount()
    {
        # ділимо та повертаємо
        return ceil($this->total / $this->limit);
    }

}
