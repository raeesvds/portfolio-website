import React from 'react';
import './Form.css';
import { Button } from './Button';


function Form() {
return (
    <div class="container">
    <h1>Contact Form</h1>
    <form target="_blank" action="https://formsubmit.co/raees.vds@gmail.com" method="POST">
    <div class="form-group">
        <div class="form-row">
        <div class="col">
            <input 
            type = "text" 
            name="name" 
            class="form-control" 
            placeholder="Full Name" required 
            />
        </div>
        <div class="col">
            <input 
            type="email" 
            name="email" 
            class="form-control" 
            placeholder="Email Address" required 
            />
        </div>
        </div>
    </div>
    <div class="form-group">
        <textarea placeholder="Your Message" 
        class="form-message" 
        name="message" 
        rows="6" required>
        </textarea>
    </div>
    <Button type="submit" class="btn btn-lg btn-dark btn-block">Submit Form</Button>
    </form>
</div>
);
}

export default Form;