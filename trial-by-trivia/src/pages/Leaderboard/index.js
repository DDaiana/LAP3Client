import React, { useState, useEffect } from 'react';
import axios from 'axios';


export default function Leaderboard () {
    const [scores, setScores] = useState([]);

    useEffect(() => {


		const getScores = async () => {
			try {
				let opts = { headers: { Accept: 'application/json' } };
				let {data} = await axios.get(
					'http://localhost:3005/',
					opts
				);
                setScores(data);
			} catch (err) {
				console.warn(err);
			}
		};
		getScores();
	}, []);

    return (
		<ol >
			{scores.map((score) => (
				<li key={score.id}>
					{score.username} &nbsp;
					{score.score}
				</li>
			))}
		</ol>
    );
}
