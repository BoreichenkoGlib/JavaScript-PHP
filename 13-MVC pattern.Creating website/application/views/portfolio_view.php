<h1>Портфоліо</h1>
<p>
<table>
Посилання на наші проекти:
<tr><td>Рік</td><td>Проект</td><td>Опис</td></tr>
<?php

	foreach($data as $row)
	{
		echo '<tr><td>'.$row['Year'].'</td><td>'.$row['Site'].'</td><td>'.$row['Description'].'</td></tr>';
	}
	
?>
</table>
</p>
