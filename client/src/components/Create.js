import React from 'react';
import { useNavigate } from 'react-router-dom';


function Create() {
  return (
    <div>   
        <h1 className="title">Get ready to BLOG</h1>
            <div className="form-container">
                <p className="form-text">Need to edit?</p>
                 <p className="form-text">Let's blog the day away!</p>
      
        <form
        action="<%= locals.isEdit ? `/edit/${locals.blogDetails?.id}` : '/blogDetails' %>"
        method="post"
        >
        <label for="bTitle">What would you like your TITLE to be?</label>
        <input
          type="text"
          id="bTitle"
          name="blogTitle"
          placeholder="Hello..."
          required
        />

        <label for="bDes">Just type here</label>
        <textarea
          type="text"
          id="bDes"
          name="blogDes"
          placeholder="..."
          rows="15"
          required
        >
        </textarea>
        <input
          type="submit"
          value="<%= locals.isEdit ? 'EDIT' : 'SUBMIT' %>"
        />
      </form>
    </div>
    </div>
  )
}

export default Create;