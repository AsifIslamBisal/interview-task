
import React from 'react';

const PostCard = ({ post }) => {

  return (
    
    <div className="min-w-[350px] max-w-[350px] border border-gray-200 rounded-xl bg-white p-4 shadow-md flex-col-1">
      
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center">
          <div className="w-9 h-9 rounded-full bg-gray-300 mr-3"/> 
          <div>
            <span className="font-bold block text-sm hover:underline">{post.name}</span>
            <span className="text-xs text-gray-500 hover:underline">{post.handle} · {post.date}</span>
          </div>
        </div>
        <button className="bg-black text-white px-3 py-1 rounded-full text-sm hover:opacity-90">
          Follow
        </button>
      </div>
      <p className="text-sm mb-3">{post.caption}</p>
      <img className="bg-gray-100 w-full h-48 rounded-lg mb-3 flex justify-center items-center text-xs text-gray-500 text-center" src={post.image} alt="" />
      <div className="flex justify-between text-xs text-gray-600 border-t border-gray-100 pt-3">
        <span className="font-bold text-red-500">❤️ {post.likes}</span>
        <span className="cursor-pointer hover:underline">Reply</span>
        <span className="cursor-pointer hover:underline">Copy link to post</span>
      </div>
      
      <div className="text-center mt-3 pb-3 border-b border-gray-100">
        <a href="#read-more" className="text-blue-600 text-sm hover:underline">Read more on X</a>
      </div>

      <div className="pt-3 text-sm text-gray-800 bg-gray-50 p-3 rounded-lg mt-3">
        <p>{post.comment}</p>
      </div>

    </div>
  );
};

export default PostCard;