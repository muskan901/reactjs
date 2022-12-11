import "./Post.css";
import React from "react";
import Avatar from '@mui/material/Avatar';
import { deepPurple } from '@mui/material/colors';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import NearMeOutlinedIcon from '@mui/icons-material/NearMeOutlined';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import Checkbox from '@mui/material/Checkbox';
import Favorite from '@mui/icons-material/Favorite';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';


function Post({username, caption, imageUrl }) {
  return (
    <div className="post">
      <div className="post__header">
        {/* Header: avatar with username */}
        <div className="post__avatar">
        { <Avatar
            sx={{ bgcolor: deepPurple[500] }}
            alt="Remy Sharp"
            src="/broken-image.jpg">
            C
           </Avatar> }
           </div>
           <div className="likeShare">
           <FavoriteBorderIcon className="likeShare-item" fontSize="medium" />
        <ModeCommentOutlinedIcon className="likeShare-item" fontSize="medium" />
        <NearMeOutlinedIcon className="likeShare-item" fontSize="medium" />
        <TurnedInNotIcon className="likeShare-item-save" fontSize="medium"/>
           </div>
           <div className="style">
      <FormControlLabel
        control={<Checkbox icon={<FavoriteBorderIcon />} 
                  checkedIcon={<Favorite />}
          name="checkedH" />}
      />
    </div>
        <h3>{username}</h3>
        <div className="MoreHorizIcon">
          <MoreHorizOutlinedIcon />
        </div>
      </div>
      {/* Image */}
      <img className="post__image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF4WvC5PYhh90XerR_RZXPr2mpyVzAB_f7jg&usqp=CAU" alt="" />
      {/* Username + caption */}
      <h4 className="post__text">
        <strong>{username}</strong> {caption}
      </h4>  
      {/* { {{user && ( */}
        <div className="postComment_Box"> 
          <input
            className="comment_input"
            type="text"
            placeholder="Add a comment..."
            // value={comment}
            // onChange={(e) => SetComment(e.target.value)}
          /> 
          <Button
            color="secondary"
            className="comment_button"
            // disabled={!comment}
            type="submit"
            // onClick={postComment}
          >
            Post
          </Button>
    </div>
    </div>
  );
}

// class CommentBox extends React.Component {
//     constructor() {
//       super();
  
//       this.state = {
//         showComments: false,
//         comments: [
//         { id: 1, author: "Coder_", body: "This is awesome" },
//         { id: 2, author: "coding._.", body: "OOhhh wooww" },
//         { id: 3, author: "tribers_._", body: "This is cool" }] };
  
  
//     }
  
//     render() {
//       const comments = this._getComments();
//       let commentNodes;
//       let buttonText = 'Show Comments';
  
//       if (this.state.showComments) {
//         buttonText = 'Hide Comments';
//         commentNodes = /*#__PURE__*/React.createElement("div", { className: "comment-list" }, comments);
//       }
  
//       return /*#__PURE__*/(
//         React.createElement("div", { className: "comment-box" }, /*#__PURE__*/
//         React.createElement("h2", null, "Join the Discussion!"), /*#__PURE__*/
//         React.createElement(CommentForm, { addComment: this._addComment.bind(this) }), /*#__PURE__*/
//         React.createElement("button", { id: "comment-reveal", onClick: this._handleClick.bind(this) },
//         buttonText), /*#__PURE__*/
  
//         React.createElement("h3", null, "Comments"), /*#__PURE__*/
//         React.createElement("h4", { className: "comment-count" },
//         this._getCommentsTitle(comments.length)),
  
//         commentNodes));
  
  
//     } // end render
  
//     _addComment(author, body) {
//       const comment = {
//         id: this.state.comments.length + 1,
//         author,
//         body };
  
//       this.setState({ comments: this.state.comments.concat([comment]) }); // *new array references help React stay fast, so concat works better than push here.
//     }
  
//     _handleClick() {
//       this.setState({
//         showComments: !this.state.showComments });
  
//     }
  
//     _getComments() {
//       return this.state.comments.map(comment => {
//         return /*#__PURE__*/(
//           React.createElement(Comment, {
//             author: comment.author,
//             body: comment.body,
//             key: comment.id }));
  
//       });
//     }
  
//     _getCommentsTitle(commentCount) {
//       if (commentCount === 0) {
//         return 'No comments yet';
//       } else if (commentCount === 1) {
//         return "1 comment";
//       } else {
//         return `${commentCount} comments`;
//       }
//     }}
//   // end CommentBox component
  
//   class CommentForm extends React.Component {
//     render() {
//       return /*#__PURE__*/(
//         React.createElement("form", { className: "comment-form", onSubmit: this._handleSubmit.bind(this) }, /*#__PURE__*/
//         React.createElement("div", { className: "comment-form-fields" }, /*#__PURE__*/
//         React.createElement("input", { placeholder: "Name", required: true, ref: input => this._author = input }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/
//         React.createElement("textarea", { placeholder: "Comment", rows: "4", required: true, ref: textarea => this._body = textarea })), /*#__PURE__*/
  
//         React.createElement("div", { className: "comment-form-actions" }, /*#__PURE__*/
//         React.createElement("button", { type: "submit" }, "Post Comment"))));
  
  
  
//     } // end render
  
//     _handleSubmit(event) {
//       event.preventDefault(); // prevents page from reloading on submit
//       let author = this._author;
//       let body = this._body;
//       this.props.addComment(author.value, body.value);
//     }}
//   // end CommentForm component
  
//   class Comment extends React.Component {
//     render() {
//       return /*#__PURE__*/(
//         React.createElement("div", { className: "comment" }, /*#__PURE__*/
//         React.createElement("p", { className: "comment-header" }, this.props.author), /*#__PURE__*/
//         React.createElement("p", { className: "comment-body" }, "- ", this.props.body), /*#__PURE__*/
//         React.createElement("div", { className: "comment-footer" }, /*#__PURE__*/
//         React.createElement("a", { href: "#", className: "comment-footer-delete", onClick: this._deleteComment }, "Delete Comment"))));
  
  
  
//     }
//     _deleteComment() {
//       alert("-- DELETE Comment Functionality COMMING SOON...");
//     }}
  
  
  
  

export default Post;