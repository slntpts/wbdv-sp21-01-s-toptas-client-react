import React, {useState} from 'react'

const ImageWidget = (
    {
        widget,
        updateWidget,
        deleteWidget,
    }) => {
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
                <i onClick={() => updateWidget({...widget, isEditing: true})}
                   className="fas fa-2x fa-cog float-right"></i>
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

                    <>
                        <input value={widget.src} className="form-control"/>
                        <input value={widget.width} className="form-control"/>
                        <input value={widget.height} className="form-control"/>
                    </>


                    {/*<>*/}
                    {/*    <input checked={widget.ordered} type="checkbox"/> Ordered*/}
                    {/*    <br/>*/}
                    {/*    Item List*/}
                    {/*    <textarea*/}
                    {/*        onChange={(e) => setWidgetCache({...widgetCache, text: e.target.value})}*/}
                    {/*        value={widgetCache.text} rows={10} className="form-control"></textarea>*/}
                    {/*</>*/}

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




