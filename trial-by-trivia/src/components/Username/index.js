import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const Username = () => {
    const dispatch = useDispatch();
    const playerCount = useSelector((state) => state.mainReducer.playerCount);
    const player1 = useSelector((state) => state.mainReducer.player1.username);
    const player2 = useSelector((state) => state.mainReducer.player2.username);
    let [bool, setBool] = useState(true)

    const updateUsername = (e) => {
        e.preventDefault();
        switch (playerCount) {
            case 2:
                dispatch({
                    type: "SET_PLAYER1",
                    payload: {
                        username: e.target.player1.value,
                    },
                });
                dispatch({
                    type: "SET_PLAYER2",
                    payload: {
                        username: e.target.player2.value,
                    },
                });
                break;
            default:
                dispatch({
                    type: "SET_PLAYER1",
                    payload: {
                        username: e.target.player1.value,
                    },
                });
                break;
        }
        setBool(false)

    };


    return (
        <>
            {bool ?
                <form className="add-form" onSubmit={updateUsername}>
                    {playerCount === 1 ? (
                        <div className="form-control">
                            <label>Player 1</label>
                            <input
                                className="usernameInputs"
                                type="text"
                                id="player1"
                                required
                                placeholder="Add Username"
                            />
                        </div>
                    ) : (
                        <>
                            <div className="form-control">
                                <label>Player 1</label>
                                <input
                                    type="text"
                                    id="player1"
                                    required
                                    placeholder="add username"
                                />
                            </div>
                            <div className="form-control">
                                <label>Player 2</label>
                                <input
                                    type="text"
                                    id="player2"
                                    required
                                    placeholder="add username"
                                />
                            </div>
                        </>
                    )}

                    <input id="saveBtn5" className="coolbutton" type="submit" value="Save" />
                </form> :
                <div className="playerNamesSelected">
                    {playerCount === 2 ? (
                        <div className="usernameDiv">
                            <p className="player1Username">player 1: {player1}</p>
                            <p className="player2Username">player 2: {player2}</p>
                        </div>)
                        : (
                            <p id="username1soloplay" className="player1Username">player 1: {player1}</p>)}

                </div>}
        </>
    );
};
