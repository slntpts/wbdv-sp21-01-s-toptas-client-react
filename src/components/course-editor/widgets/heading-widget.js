import React, {useState} from 'react'

const HeadingWidget = (
    {
        widget,
        updateWidget,
        deleteWidget,
    }) =>
{
    const [isEditing, setIsEditing] = useState(false)
    const [widgetCache, setWidgetCache] = useState(widget)
    return (
        <>
            {
                widget.isEditing &&
                <>
                    <i onClick={() => {
                        updateWidget({...widget, isEditing: false})
                    }} className="fas fa-2x fa-check float-right"></i>
                    <i onClick={() => {
                        deleteWidget(widget.id)
                    }} className="fas fa-2x fa-trash float-right"></i>
                </>
            }

            {
                !widget.isEditing &&
                <i onClick={() => updateWidget({...widget, isEditing: true})} className="fas fa-2x fa-cog float-right"></i>
            }

            {
                widget.isEditing &&
                <>
                    <select
                        onChange={(e) => updateWidget({...widget, type: e.target.value})}
                        value={widget.type} className="form-control">
                        <option value={"HEADING"}>Heading</option>
                        <option value={"PARAGRAPH"}>Paragraph</option>
                        <option value={"VIDEO"}>Video - Invalid Type! Need to remove the widget from db if selected</option>
                        <option value={"IMAGE"}>Image</option>
                        <option value={"LINK"}>Link - Invalid Type! Need to remove the widget from db if selected</option>
                        <option value={"LIST"}>List</option>
                        <option value={"HTML"}>HTML - Invalid Type! Need to remove the widget from db if selected</option>
                    </select>
                    <input
                        onChange={(e) => updateWidget({...widget, text: e.target.value})}
                        value={widget.text} className="form-control"/>
                    <select
                        onChange={(e) => updateWidget({...widget, size: Number(e.target.value)})}
                        value={widget.size} className="form-control">
                        <option value={1}>Heading 1</option>
                        <option value={2}>Heading 2</option>
                        <option value={3}>Heading 3</option>
                        <option value={4}>Heading 4</option>
                        <option value={5}>Heading 5</option>
                        <option value={6}>Heading 6</option>
                    </select>
                </>
            }
            {
                !widget.isEditing &&
                <>
                    {widget.size === 1 && <h1>{widget.text}</h1>}
                    {widget.size === 2 && <h2>{widget.text}</h2>}
                    {widget.size === 3 && <h3>{widget.text}</h3>}
                    {widget.size === 4 && <h4>{widget.text}</h4>}
                    {widget.size === 5 && <h5>{widget.text}</h5>}
                    {widget.size === 6 && <h6>{widget.text}</h6>}
                </>
            }
        </>
    )
}

export default HeadingWidget