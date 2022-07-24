import React from 'react';
import '../assets/css/Paper.css'
import parse from "html-react-parser";

const LargePaper = ({page}, ref) => {
    return (
        <div id = {page.id} className = 'paper' style = {{zIndex: page.zIndex}} ref = {ref}>
            <div className = 'front'>
                <div className = 'front-content'>
                    {parse(page.front_content)}
                </div>
            </div>
            <div className = 'back'>
                <div className = 'back-content'>
                    {parse(page.back_content)}
                </div>
            </div>
        </div>
    );
}

const LargePapers = React.forwardRef(LargePaper)

const SmallPapers = (props) => {
    return (
        <div id = {props.page.id} className = 'paper'>
            {props.isFront ? 
                (
                <div className = 'front'>
                    <div className = 'front-content'>
                        {parse(props.page.front_content)}
                    </div>
                </div>
                ) : (
                <div className = 'back'>
                    <div className = 'back-content'>
                        {parse(props.page.back_content)}
                    </div>
                </div>
                )
            }
        </div>
    );
}

export {LargePapers, SmallPapers};