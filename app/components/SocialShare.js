"use client";
import { MdEmail } from "react-icons/md";

import { useState } from "react";
import { AiOutlineShareAlt } from "react-icons/ai";
import {
  FaFacebook,
  FaTwitter,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";
import {
  EmailShareButton,
  FacebookShareButton,
  InstapaperShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";

export default function SocialShare({ recipe }) {
  const [enableShare, setEnableShare] = useState(false);

  const windowLocation = window?.location.href;

  const hashTag = `#${recipe.name.split(" ").join("-")}`;

  function handleEnableShare() {
    setEnableShare(!enableShare);
  }
  return (
    <>
      <div
        className='flex gap-2 text-gray-600 items-center cursor-pointer relative'
        onClick={handleEnableShare}>
        <span className='hover:text-[#0E79F6]'>
          <AiOutlineShareAlt className='inline-block ' />

          <span>Share</span>
        </span>
        {enableShare && (
          <div className='absolute flex justify-around gap-2 right-0 top-[100%] py-6'>
            <span>
              <EmailShareButton
                subject={recipe.name}
                url={windowLocation}
                body={recipe.description}>
                <MdEmail color='#666' size='32px' />
              </EmailShareButton>
            </span>
            <span>
              <FacebookShareButton hashtag={hashTag} url={windowLocation}>
                <FaFacebook color='#1877F2' size='32px' />
              </FacebookShareButton>
            </span>
            <span>
              <TwitterShareButton
                title={recipe.name}
                hashtags={[hashTag]}
                url={windowLocation}>
                <FaTwitter color='#1DA1F2' size='32px' />
              </TwitterShareButton>
            </span>
            <span>
              <InstapaperShareButton
                url={windowLocation}
                title={recipe.name}
                description={recipe.description}>
                <FaInstagramSquare color='#666' size='32px' />
              </InstapaperShareButton>
            </span>
            <span>
              <LinkedinShareButton
                url={windowLocation}
                title={recipe.name}
                summary={recipe.description}
                source={windowLocation}>
                <FaLinkedin color='#0077B5' size='32px' />
              </LinkedinShareButton>
            </span>
          </div>
        )}
      </div>
    </>
  );
}
