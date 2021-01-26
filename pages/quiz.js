import styled from "styled-components";

import QuizBackground from "../src/components/QuizBackground";

import db from '../db.json';

const TitleQuiz = styled.h1`
    font-size: 40px;
    text-align: center;
    margin-top: 60px;
`;

export default function Quiz(){
    return (
        <QuizBackground backgroundImage={db.bg2}>
            <TitleQuiz>
                Nós sempre nos definimos pela capacidade de superar o impossível.
            </TitleQuiz>
        </QuizBackground>
    )
}