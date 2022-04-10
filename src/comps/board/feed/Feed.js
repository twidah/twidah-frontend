import React, { useEffect } from "react";
import "../../glitch.css";
import { connect } from "react-redux";
import { FetchPosts } from "../../../actions/PostActions";
import { Post } from "../post/Post";

const FeedComponent = ({ posts, isLoading, FetchPosts, errors }) => {
    useEffect(() => {
        FetchPosts();
    }, [FetchPosts]);

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    return (
        <div>
            <h1>Feed</h1>
            {errors ? <div>{errors}</div> : null}
            {posts.map((post, idx) => {
                return <Post key={idx} post={post} />;
            })}
        </div>
    );
};
// Add errors from state
const mapStateToProps = (state) => {
    return {
        posts: state.posts.posts,
        isLoading: state.posts.isLoading,
        error: state.errors,
    };
};

const mapActionsToProps = () => {
    return {
        FetchPosts,
    };
};

export const Feed = connect(
    mapStateToProps,
    mapActionsToProps()
)(FeedComponent);
