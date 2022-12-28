import React from 'react';
import ProfilePicture from "../../../static/assets/images/page-images/alan-bouldering-the-finger-jtree.png"

export default function() {
    return (
        <div className='content-page-wrapper'>
            <div className='left-image' style={{background:"url("+ ProfilePicture +") no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "left"
            }} />

            <div className='right-contents'>
                <h1>About Me</h1>
                <div className='feature-contents'>
                    <p>Hello, my name is Alan! </p>
                    <p>
                        I'm a full-stack software developer in Phoenix, AZ.
                        A highly, passionate individual who works well with others to accomplish goals.
                        I enjoy learning new ideas, trying to solve them, and working with piers to accomplish the "bigger picture."
                    </p>
                    <p>
                        Being a US Army Veteran I have learned to be part of a team and to be just as efficient on my own.
                        I strive under pressure and am not affraid to fail and find a solution where persistance is the pinnacle of any innovative idea.
                    </p>
                </div>
            </div>
        </div>
    );
}