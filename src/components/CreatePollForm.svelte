<script>
    import { createEventDispatcher } from "svelte";
    import PollStore from "../stores/PollStore.js";
    // @ts-ignore
    import Button from "../shared/Button.svelte";
    let dispatch = createEventDispatcher()
    let fields = { question: '', answerA:'', answerB:''};
    let errors = { question: '', answerA:'', answerB:''};
    let valid = false;
    const submitHandler =() =>{
        valid = !valid;

        // validate question
        if (fields.question.trim().length  < 5 ){
            valid = false;
            errors.question = 'Question muat be at least 5 characters long';
        }
        else{
            errors.question = ''; 
        }

        // validate answer A
        if (fields.answerA.trim().length  < 1 ){
            valid = false;
            errors.answerA = 'Answer A can not be empty';
        }
        else{
            errors.answerA = ''; 
        }

        // validate answer B

        if (fields.answerB.trim().length  < 1 ){
            valid = false;
            errors.answerB = 'Answer B can not be empty';
        }
        else{
            errors.answerB = ''; 
        }

        // add new Poll
        if(valid){
            let poll = {...fields, votesA:0, votesB:0, id:Math.random()};
            // save poll to store
            PollStore.update((currentPolls)=>{
                return [poll, ...currentPolls]
            })
            dispatch('add')
        }
    }
</script>

<form on:submit|preventDefault={submitHandler}>
    <div class="form-field">
        <label for="question">Poll Question</label>
        <input type="text" id="question" bind:value={fields.question}>
        <div class="errors">{ errors.question }</div>
    </div>
    <div class="form-field">
        <label for="answer-a">Answer A</label>
        <input type="text" id="answer-a"  bind:value={fields.answerA}>
        <div class="errors">{ errors.answerA }</div>

    </div>
    <div class="form-field">
        <label for="answer-b">Answer B</label>
        <input type="text" id="answer-b"  bind:value={fields.answerB}>
        <div class="errors">{ errors.answerB }</div>

    </div>
    <Button width=100  flat={true} >Add Poll </Button>
</form>



<style>

    form{
        width:400px;
        margin: 0 auto;
        text-align: center;
    }

    .form-field{
        margin: 18px auto;
    }

    input{
        width: 100%;
        border-radius: 6px;
    }

    label{
        margin: 10px auto;
        text-align: left;
    }

    .errors{
        color: red;
        font-weight: bold;
        font-size: 12px;
        text-align: left;
    }

</style>