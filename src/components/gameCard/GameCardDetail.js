import chess from '../../assets/img/cardGame/chess.jpg';
import ludo from '../../assets/img/cardGame/ludo.jpg';
import paint from '../../assets/img/cardGame/paint.jpg';
import puzzle from '../../assets/img/cardGame/puzzle.jpg';
import snake from '../../assets/img/cardGame/snake.jpg';
import sudoku from '../../assets/img/cardGame/sudoku.jpg';
import xo from '../../assets/img/cardGame/xo.png';

export default [
    {
        id : 0,
        gameName : 'بازی دوز',
        gameImg : xo,
        gameDesc : 'لورم ایپسوم متن ساختگیست در صنعت چاپ',
        url : '/xo-game',
        gameRank : 5,
        gameStar : 57,
    },
    {
        id : 1,
        gameName : 'پازل',
        gameImg : puzzle,
        gameDesc : 'لورم ایپسوم متن ساختگیست در صنعت چاپ',
        url : '/puzzle-game',
        gameRank : 4,
        gameStar : 111,
    },
    {
        id : 2,
        gameName : 'سودوکو',
        gameImg : sudoku,
        gameDesc : 'لورم ایپسوم متن ساختگیست در صنعت چاپ',
        url : '/sudoku-game',
        gameRank : 3,
        gameStar : 150,
    },
    {
        id : 3,
        gameName : 'دفتر نقاشی',
        gameImg : paint,
        gameDesc : 'لورم ایپسوم متن ساختگیست در صنعت چاپ',
        url : '/paint',
        gameRank : 6,
        gameStar : 50,
    },
    {
        id : 4,
        gameName : 'مار و پله',
        gameImg : snake,
        gameDesc : 'لورم ایپسوم متن ساختگیست در صنعت چاپ',
        url : '/snake-ladder-game',
        gameRank : 2,
        gameStar : 170,
    },
    {
        id : 5,
        gameName : 'منچ',
        gameImg : ludo,
        gameDesc : 'لورم ایپسوم متن ساختگیست در صنعت چاپ',
        url : '/ludo-game',
        gameRank : 1,
        gameStar : 230,
    },
    {
        id : 6,
        gameName : 'شطرنج',
        gameImg : chess,
        gameDesc : 'لورم ایپسوم متن ساختگیست در صنعت چاپ',
        url : '/chess-game',
        gameRank : 7,
        gameStar : 12,
    }

]