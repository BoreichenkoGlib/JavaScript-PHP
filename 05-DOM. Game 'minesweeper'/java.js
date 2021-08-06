(function ()
{
    var formElem = document.createElement('form');
    var rowInput = document.createElement('input');
    rowInput.id = 'tableRow';
    rowInput.setAttribute("type", "text");
    rowInput.setAttribute("placeholder", "Rows");
    var colInput = document.createElement('input');
    colInput.id = 'tableColl';
    colInput.setAttribute("type", "text");
    colInput.setAttribute("placeholder", "Colls");
    var minesInput = document.createElement('input');
    minesInput.id = 'mines';
    minesInput.setAttribute("type", "text");
    minesInput.setAttribute("placeholder", "Mines");
    var submit = document.createElement('input');
    submit.id = 'generateButton';
    submit.setAttribute("type", "button");
    submit.value = "Generate";
    formElem.appendChild(rowInput);
    formElem.appendChild(colInput);
    formElem.appendChild(minesInput);
    formElem.appendChild(submit);
    document.body.appendChild(formElem);

})();

var generateButton = document.querySelector("#generateButton");

generateButton.addEventListener('click', generateButtonClick);

var rowCount;
var colCount;
var minesCount;
var minesweeperMatrix;
var openedCells;
var minesweeperElems;

function generateButtonClick()
{
    if (document.querySelector('table') !== null)
    {
        document.body.removeChild(document.querySelector('table'));
    }
    if (document.querySelector('div') !== null)
    {
        document.body.removeChild(document.querySelector('div'));
    }
    var tableElem = document.createElement('table');
    tableElem.addEventListener('click', tableClick);
    tableElem.addEventListener('contextmenu', tableContextMenu);
    rowCount = +document.getElementById('tableRow').value;
    colCount = +document.getElementById('tableColl').value;
    minesCount = +document.getElementById('mines').value;
    minesweeperMatrix = matrixArray(rowCount, colCount);
    openedCells = arrayHelper(rowCount + 2, colCount + 2);
    minesweeperElems = matrixArray(rowCount, colCount);
    for (var i = 0; i < rowCount; i++)
    {
        var trElem = document.createElement('tr');
        for (var j = 0; j < colCount; j++)
        {
            var tdElem = document.createElement('td');
            trElem.appendChild(tdElem);
            minesweeperElems[i][j] = tdElem;
        }
        tableElem.appendChild(trElem);
}
    setMinesAndNumbers();
    document.body.appendChild(tableElem);
}

function tableClick(event)
{
    if (event.target.tagName === 'TD')
    {
        var row = event.target.parentNode.rowIndex;
        var col = event.target.cellIndex;
        var toOpen = [row, col];
        while (toOpen.length > 0)
        {

            if (minesweeperMatrix[row][col] === -1)
                return endGame(false);

            if (minesweeperMatrix[row][col] !== 0)
            {
                openOneCell(row, col);
                checkOnEnd();
                return;
            }

            openNearCell(toOpen[0], toOpen[1]);

            function openNearCell(row, col)
            {
                for (var i = row - 1; i <= row + 1; i++)
                    for (var j = col - 1; j <= col + 1; j++)
                        openOneCell(i, j);
                toOpen.shift();
                toOpen.shift();
            }

            function openOneCell(row, col)
            {
                if (openedCells[row + 1][col + 1] !== -1 && openedCells[row + 1][col + 1] !== true)
                {
                    if(minesweeperElems[row][col].classList.contains('setMine'))
                    {
                        minesweeperElems[row][col].classList.toggle('setMine');
                    }
                    minesweeperElems[row][col].classList.toggle('openedCell');
                    minesweeperElems[row][col].textContent = minesweeperMatrix[row][col];
                    openedCells[row + 1][col + 1] = true;
                    if (minesweeperMatrix[row][col] === 0)
                    {
                        toOpen.push(row, col);
                    }
                }
            }
        }
    }
    checkOnEnd();
}

function tableContextMenu(event)
{
    event.preventDefault();
    if (event.target.tagName === 'TD' && !(event.target.classList.contains('openedCell')))
    {
        event.target.classList.toggle('setMine');
        checkOnEnd();
    }
}

function incMines(row, col)
{
    for (var i = row - 1; i <= row + 1; i++)
        for (var j = col - 1; j <= col + 1; j++)
        {
            if (openedCells[i + 1][j + 1] !== -1 && !(i === row && j === col) && minesweeperMatrix[i][j] !== -1)
                minesweeperMatrix[i][j] += 1;
        }
}

function matrixArray(rows, cols)
{
    var arr = [];
    for (var i = 0; i < rows; i++)
    {
        arr[i] = [];
        for (var j = 0; j < cols; j++)
        {
            arr[i][j] = 0;
        }
    }
    return arr;
}

function arrayHelper(rows, cols)
{
    var arr = [];
    for (var i = 0; i < rows; i++)
    {
        arr[i] = [];
        for (var j = 0; j < cols; j++)
        {
            if (i === 0 || j === 0 || i === rows - 1 || j === cols - 1)
                arr[i][j] = -1;
            else
                arr[i][j] = false;
        }
    }
    return arr;
}

function setMinesAndNumbers()
{
    var row, col;
    for (var i = 0; i < minesCount; i++)
    {
        row = Math.floor(Math.random() * rowCount);
        col = Math.floor(Math.random() * colCount);
        if (minesweeperMatrix[row][col] !== -1)
        {
            minesweeperMatrix[row][col] = -1;
            incMines(row, col);
        }
        else
            i--;
    }
    console.log(minesweeperMatrix);
}

function checkOnEnd()
{
    for (var i = 0; i < rowCount; i++)
        for (var j = 0; j < colCount; j++)
            if (minesweeperMatrix[i][j] !== -1 && openedCells[i + 1][j + 1] !== true)
                return;
    endGame(true);
}

function endGame(isWin)
{
    console.log(isWin);
    document.querySelector("table").removeEventListener('click', tableClick);
    document.querySelector("table").removeEventListener('contextmenu', tableContextMenu);
    var resultElem = document.createElement('div');

    if (isWin)
        resultElem.textContent = "Ви виграли, не обольщайтесь";
    else
        resultElem.textContent = "Ви програли, спробуйте ще раз";
    document.body.appendChild(resultElem);
    for (var i = 0; i < rowCount; i++)
        for (var j = 0; j < colCount; j++)
            if(minesweeperMatrix[i][j]===-1)
                minesweeperElems[i][j].classList.toggle('showMine');
}


