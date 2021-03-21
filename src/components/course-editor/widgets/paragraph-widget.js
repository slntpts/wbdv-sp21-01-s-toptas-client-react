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