let slenzie = {
    nameEvent: '',
    questions: []
};

let question = {
    user: 'Vinicius Garcia',
    userQuestion: 'Qual seu ponto fraco?',
    vote: 0
};

function createEvent (slenzie, string){
    if(typeof(string) == 'string'){
    slenzie.nameEvent =  string;
    return slenzie;
    }else{
        return 'The input value is invalid';
    }     
}
console.log(createEvent(slenzie, 'Empregabilidade da Kenzie'));


function addQuestion (slenzie, question){
    if(question.user == ''){
        return "The user can't be empty";
    }else if( question.userQuestion == ''){
        return "The question can't be null";
    }else{
        slenzie.questions.push(question);
        return slenzie;
    }
}
console.log(addQuestion(slenzie,question));


function addVoteToQuestion (slenzie, number){
    if(typeof(number) != 'number' || number < 0 || number == parseFloat()){
        return 'The value is not allowed';
    }else if(number > slenzie.questions.length){
        return 'Question not found.';
    }else if(slenzie.questions[number] != 'null' && typeof(number) == 'number' && number >= 0){
        slenzie.questions[number].vote += 1;
        return 'Vote registered successfully';
    }
}
console.log(addVoteToQuestion (slenzie, 0));


function questionAnswered (slenzie, number){
    if(number > slenzie.questions.length){
        return 'Question not found.';
    }else if(typeof(number) != 'number' || number < 0 || number != parseInt(number)){
        return 'The value is not allowed';
    }else{
        slenzie.questions[number].answered = true;
        return slenzie;
    }
}
console.log(questionAnswered(slenzie, 0));

function unansweredQuestions (slenzie){
    let output = [];
    for(let i = 0; i <slenzie.questions.length; i++){
        if(slenzie.questions[i] == false){
            console.log(output)
        }
    }
    return output;
}
console.log(unansweredQuestions(slenzie));