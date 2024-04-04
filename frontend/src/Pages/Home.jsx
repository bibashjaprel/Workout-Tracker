import React, { useEffect } from 'react';
import WorkoutDetails from '../Components/WorkoutDetails';
import Workoutsform from '../Components/Workoutsform';
import { useWorkoutsContext } from '../hooks/useWorkoutsContext';
const Home = () => {
    const {workouts,dispatch} = useWorkoutsContext();

    useEffect(() => {
        const fetchWorkouts = async () => {
            try {
                const response = await fetch('/api/workouts');
                const json = await response.json();
                if (response.ok) {

                    // setWorkouts(json.workout); 
                    dispatch({type:'SET_WORKOUTS',payload:json})
                } else {
                    throw new Error('Failed to fetch workouts');
                }
            } catch (error) {
                console.error('Error fetching workouts:', error);
            }
        };

        fetchWorkouts();
    }, [dispatch]);

    return (
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map((workout) => (
                    <WorkoutDetails key={workout._id} workout={workout}/>
                ))}
            </div>
            <Workoutsform />
        </div>
    );
};

export default Home;
