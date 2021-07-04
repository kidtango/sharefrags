import React from 'react'
import { RiHeart2Line } from 'react-icons/ri'
import { AiOutlineComment } from 'react-icons/ai'
import { BsBookmarkDash } from 'react-icons/bs'
import { BsBookmarkPlus } from 'react-icons/bs'
import AvatarButton from '../buttons/AvatarButton'
import Button from '../buttons/Button'

const Post = () => {
  const [isSavedPost, setIsSavedPost] = React.useState(false)

  const handleSavePost = () => setIsSavedPost(!isSavedPost)

  return (
    <div className="rounded overflow-hidden bg-ebonyClay-600 text-gray-200 transition-all hover:(shadow-lg cursor-pointer)">
      <div className="aspect-h-2 aspect-w-6">
        <img
          className="object-cover"
          src="https://www.hakaimagazine.com/wp-content/uploads/header-vr-coral-beauty.jpg"
        />
      </div>
      <div className="p-2">
        <div className="flex items-center">
          <AvatarButton size="medium" tw="mr-2" />
          <div className="text-xs leading-4">
            <p className="font-semibold text-orange-500">Scott Tang</p>
            <p className="text-gray-400">Dec 26 (10 hours ago)</p>
          </div>
        </div>
        <div className="md:(px-6 py-2)">
          <h1 className="text-xl justify-between leading-5 font-semibold md:text-3xl  py-2 hover:(text-primary-300 cursor-pointer)">
            Lorem ipsum, dolor sit
          </h1>
          <p className="mt-2 space-x-1 text-xs text-gray-400">
            <span>#SPS</span>
            <span>#REEF</span>
            <span>#SALTWATER</span>
          </p>
          <div className="flex items-end justify-between mt-4">
            <div className="flex space-x-2">
              <Button buttonType={'plain'} size="small">
                <RiHeart2Line />
                <span>10</span>
              </Button>
              <Button buttonType={'plain'} size="small">
                <AiOutlineComment />
                <span>1</span>
              </Button>
            </div>
            <Button
              buttonType={'primary'}
              onClick={handleSavePost}
              size="medium"
            >
              {isSavedPost ? <BsBookmarkPlus /> : <BsBookmarkDash />}
              <span>{isSavedPost ? 'Saved' : 'Save'}</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post

// const PostButton = styled.button(({ primary }) => [
//   tw`flex items-center space-x-1 outline-none`,
//   tw`hover:(text-primary-300)`,
//   tw`focus:(outline-none)`,
//   primary &&
//     tw`px-2 py-1 text-primary rounded-lg ring ring-deepOcean-600 hover:(text-primary-600)`,
// ])