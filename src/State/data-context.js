import React, {createContext, useEffect, useRef, useState} from "react";

const DataContext = createContext({
    firstPlayer: {},
    secondPlayer: {},
    handleChangeInput: () => {
    },
    handleClickStart: () => {
    },
    isValid: "",
    showBoard: "",
    board: [],
    handleClickCell: () => {
    },
    handleStopCounter: () => {
    },
    count: "",
    handleStartCounter: () => {
    },
    startCounter: "",
    showModal: false,
    modalMessage: "",
    nextPlayer: "",
    handleCloseModal: () => {
    },
    darkMode:"",
    handleDarkMode:()=>{}


})

const options = [{_id: "1", name: "X"}, {_id: "2", name: "O"}]

export function DataContextProvider(props) {
    const [firstPlayer, setFirstPlayer] = useState({
        name: "",
        side: "",
        options: [{_id: "1", name: "X"}, {_id: "2", name: "O"}]
    })
    const [secondPlayer, setSecondPlayer] = useState({
        name: "",
        side: "",
        options: [{_id: "1", name: "X"}, {_id: "2", name: "O"}]
    })
    const [isValid, setIsValid] = useState(false)
    const [showBoard, setShowBoard] = useState(false)
    const [board, setBoard] = useState(Array(9).fill(null))
    const [isX, setIsX] = useState()
    const [count, setCount] = useState(0)
    const [startCount, setStartCount] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [nextPlayer] = useState();
    const [darkMode,setDarkMode]=useState(false)
    const modalMessage = useRef()
    const refIntervalId = useRef()

    useEffect(() => {
        if (firstPlayer.name.trim().length > 0 && firstPlayer.side && secondPlayer.name.trim().length > 0 && secondPlayer.side) setIsValid(true)
        else setIsValid(false)
    }, [firstPlayer, secondPlayer])
    useEffect(() => {
        firstPlayer.side === "X" ? setIsX(true) : setIsX(false)
    }, [firstPlayer.side])

    function handleChangeInput(e) {
        switch (e.target.name) {
            case "firstPlayerName":
                setFirstPlayer(prevState => ({
                    ...prevState, name: e.target.value
                }));
                break;
            case "secondPlayerName":
                setSecondPlayer(prevState => ({
                    ...prevState, name: e.target.value
                }));
                break;
            case "firstPlayerSelect" : {
                setFirstPlayer(prevState => ({
                    ...prevState, side: e.target.value
                }));
                let copyOptions = [...options];
                copyOptions = copyOptions.filter(option => option.name !== e.target.value)
                setSecondPlayer(prevState => ({...prevState, options: copyOptions}))
                break;
            }
            case "secondPlayerSelect": {
                setSecondPlayer(prevState => ({
                    ...prevState, side: e.target.value
                }));
                let copyOptions = [...options];
                copyOptions = copyOptions.filter(option => option.name !== e.target.value)
                setFirstPlayer(prevState => ({...prevState, options: copyOptions}))
                break;
            }
            default:
                throw new Error(e.target.name);
        }

    }

    function handleClickStart() {
        setShowBoard(true)
    }

    function handleClickCell(i) {
        if (startCount === false) setStartCount(true)
        if (board[i] || calculateWinner(board)) return
        board[i] = isX ? "X" : "O"
        setBoard(board)
        setIsX(!isX)
    }

    function calculateWinner(board) {
        const winningPatterns = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ]

        for (let i = 0; i < winningPatterns.length; i++) {
            const [a, b, c] = winningPatterns[i];
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                handleStopCounter()
                return board[a];
            }
        }
        if (!board.includes(null)) {
            handleStopCounter()
            return "draw"
        }

        return null;
    }

    function handleStartCounter() {
        refIntervalId.current = setInterval(() => setCount(prevState => prevState + 1), 1000)
    }

    function handleStopCounter() {
        clearInterval(refIntervalId.current)
    }

    function handleCLoseModal() {
        setShowModal(false)
        setShowBoard(false)
        setStartCount(false)
        setCount(0)
        setBoard(Array(9).fill(null))
    }
    function handleDarkMode() {
        setDarkMode(prevState => !prevState)
    }

    const result = calculateWinner(board)
    useEffect(() => {
        if (result) {
            result === "draw" ? modalMessage.current = "Draw" : modalMessage.current = `${result} Win The Match in ${count}s!!!`
            setShowModal(true)
        }
    }, [showModal, result])


    return (
        <DataContext.Provider
            value={{
                firstPlayer: firstPlayer,
                secondPlayer: secondPlayer,
                handleChangeInput: handleChangeInput,
                isValid: isValid,
                showBoard: showBoard,
                handleClickStart: handleClickStart,
                handleClickCell: handleClickCell,
                board: board,
                calculateWinner: calculateWinner,
                count: count,
                startCounter: startCount,
                handleStartCounter: handleStartCounter,
                handleStopCounter:handleStopCounter,
                showModal: showModal,
                nextPlayer: nextPlayer,
                modalMessage: modalMessage.current,
                handleCloseModal: handleCLoseModal,
                darkMode: darkMode,
                handleDarkMode:handleDarkMode

            }}>
            {props.children}
        </DataContext.Provider>
    );
}

export default DataContext;