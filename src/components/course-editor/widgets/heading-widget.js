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
                    <input
                        onChange={(e) => setWidgetCache({...widgetCache, text: e.target.value})}
                        value={widgetCache.text} className="form-control"/>
                    <select
                        onChange={(e) => setWidgetCache({...widgetCache, size: Number(e.target.value)})}
                        value={widgetCache.size} className="form-control">
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
                !isEditing &&
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