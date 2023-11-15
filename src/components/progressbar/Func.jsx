import React from 'react';
import StudentProgress from './StudentProgress';

const studentSubjects = {
    HTML: "88%",
    CSS: "75%",
    Javascript: "70%",
    React: "70%",
};

const Func = () => {
    return (
        <div>
            <StudentProgress subjects={studentSubjects} />
        </div>
    );
};

export default Func;
