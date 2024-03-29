import React, {useState} from 'react'

const ParagraphWidget = (
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
                    <textarea
                        onChange={(e) => updateWidget({...widget, text: e.target.value})}
                        value={widget.text} className="form-control"></textarea>
                </>
            }
            {
                !widget.isEditing &&
                <p>
                    {widget.text}
                </p>
            }
        </>
    )
}
export default ParagraphWidget