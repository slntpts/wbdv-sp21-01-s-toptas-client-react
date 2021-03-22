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
                isEditing &&
                <>
                    <i onClick={() => {
                        setIsEditing(false)
                        updateWidget(widgetCache)
                    }} className="fas fa-2x fa-check float-right"></i>
                    <i onClick={() => {
                        setIsEditing(false)
                        deleteWidget(widget.id)
                    }} className="fas fa-2x fa-trash float-right"></i>
                </>
            }

            {
                !isEditing &&
                <i onClick={() => setIsEditing(true)} className="fas fa-2x fa-cog float-right"></i>
            }
            {
                isEditing &&
                <>
                    <select
                        onChange={(e) => setWidgetCache({...widgetCache, type: e.target.value})}
                        value={widgetCache.type} className="form-control">
                        <option value={"HEADING"}>Heading</option>
                        <option value={"PARAGRAPH"}>Paragraph</option>
                        <option value={widget.type}>Video</option>
                        <option value={widget.type}>Image</option>
                        <option value={widget.type}>Link</option>
                        <option value={widget.type}>List</option>
                        <option value={widget.type}>HTML</option>
                    </select>
                    <textarea
                        onChange={(e) => setWidgetCache({...widgetCache, text: e.target.value})}
                        value={widgetCache.text} className="form-control"></textarea>
                </>
            }
            {
                !isEditing &&
                <p>
                    {widget.text}
                </p>
            }
        </>
    )
}
export default ParagraphWidget