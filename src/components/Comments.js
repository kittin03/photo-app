import React from 'react';
import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyD2LLCvqCKGSpQFPZtpixJqxuJCQPSbsZU",
    authDomain: "photo-app-4dacc.firebaseapp.com",
    databaseURL: "https://photo-app-4dacc.firebaseio.com",
    storageBucket: "photo-app-4dacc.appspot.com",
    messagingSenderId: "225745303461"
  };
firebase.initializeApp(config);


const Comments = React.createClass({
  renderComment(comment, i) {
    return(
      <div className="comment" key={i}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button className="remove-comment"
            onClick={this.props.removeComment.bind(null, this.props.params.postId, i)}>
            &times;
          </button>
        </p>
      </div>
    );
  },

  handleSubmit(e) {
    e.preventDefault();
    const { postId } = this.props.params;
    const author = this.refs.author.value;
    const comment = this.refs.comment.value;
    this.props.addComment(postId, author, comment);
    this.refs.commentForm.reset();
  },

  render() {
    return (
      <div className="comments">
        {this.props.postComments.map(this.renderComment)}
        <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit}>
          <input type="text" ref="author" placeholder="author" />
          <input type="text" ref="comment" placeholder="comment" />
          <input type="submit" hidden />
        </form>
      </div>
    )
  }
});

export default Comments;
