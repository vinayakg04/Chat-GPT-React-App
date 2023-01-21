import React from 'react'
import "./Translation.css"
export default function Translation({ doStuff, setinput, result }) {
    return (
        <>
            <textarea
                className='text-area'
                placeholder='Type your Question here'
                cols={55}
                rows={10}
                onChange={(e) => setinput(e.target.value)}>
            </textarea>


            <button className='action-btn' onClick={doStuff}>
                DO YOUR STUFF
            </button>


            <h3 className='result-text'>{result.length > 0 ? result : ""}</h3>



            <div className='px-3 pt-2 pb-3 text-center text-xs text-black/50 dark:text-white/50 md:px-4 md:pt-3 md:pb-6'>
                <p>Free Research Preview. Our goal is to make AI systems more natural and safe to interact with. Your feedback will help us improve.</p>
            </div>

        </>
    )
}

