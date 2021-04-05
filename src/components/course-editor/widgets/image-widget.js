import React, {useState} from 'react'

const ImageWidget = (
    {
        widget,
        updateWidget,
        deleteWidget,
    }) => {
    const [srcValue, setSrcValue] = useState(widget.src);
    const [widthValue, setWidthValue] = useState(widget.width);
    const [heightValue, setHeightValue] = useState(widget.height);
    return (
        <>
            {
                widget.isEditing &&
                <>
                    <i onClick={() => {
                        updateWidget({
                            ...widget,
                            isEditing: false,
                            src: srcValue,
                            width: widthValue,
                            height: heightValue
                        })
                    }} className="fas fa-2x fa-check float-right"></i>
                    <i onClick={() => {
                        deleteWidget(widget.id)
                    }} className="fas fa-2x fa-trash float-right"></i>
                </>
            }
            {
                !widget.isEditing &&
                <i onClick={() => updateWidget({...widget, isEditing: true})}
                   className="fas fa-2x fa-cog float-right"></i>
            }

            {
                widget.isEditing &&
                <>
                    <select
                        onChange={(e) => updateWidget({...widget, type: e.target.value })}
                        value={widget.type} className="form-control">
                        <option value={"HEADING"}>Heading</option>
                        <option value={"PARAGRAPH"}>Paragraph</option>
                        <option value={"VIDEO"}>Video - Invalid Type! Need to remove the widget from db if selected
                        </option>
                        <option value={"IMAGE"}>Image</option>
                        <option value={"LINK"}>Link - Invalid Type! Need to remove the widget from db if selected
                        </option>
                        <option value={"LIST"}>List</option>
                        <option value={"HTML"}>HTML - Invalid Type! Need to remove the widget from db if selected
                        </option>
                    </select>


                    URL
                    <input
                        onChange={(e) => setSrcValue(e.target.value)}
                        value={srcValue} className="form-control"/>
                    width
                    <input
                        onChange={(e) => setWidthValue(Number(e.target.value))}
                        value={widthValue} className="form-control"/>
                    height
                    <input
                        onChange={(e) => setHeightValue(Number(e.target.value))}
                        value={heightValue} className="form-control"/>
                </>
            }

            {
                !widget.isEditing &&
                <>
                    <img width={widget.width} height={widget.height} src={widget.src}/>
                </>
            }
        </>
    )
}

export default ImageWidget




