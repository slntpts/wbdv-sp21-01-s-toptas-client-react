import React, {useState} from 'react'
import {Link} from "react-router-dom";

//we are creating this component to be used in adding new items. Since we are doing the same thing while adding new lesson and
//new modules. By this component we will avoid repeated lines.

//to manage things like editing, not editing, we are using hooks. Hooks is a mechanism that allow us to maintain local state
//without having to use react state, that we need to use a class for that.
const EditableItem = (
    {
        to,
        item,
        updateItem,
        deleteItem,
        active
    }) =>
    //React allow us to use anonymous tag(doesn't have a name)Allow us to not add any sub-element underneath. The reason
    //for that is we don't know what to add here for now, we will be use this component for adding both modules and lessons
    //so creating generic component here. Whatever we add here in EditableItem, the all will effect all modules and lessons that we add
    //EditableItem
{// we had only anonymous tag here then we added curly bracet and return because we need new lines here.

    //we are creating new states that uses useState
    //initial value will be false because we are not editing at the beginning
    //then we will manage icons based on this useState variables.
    const [editing, setEditing] = useState(false)
    const [itemCache, setItemCache] = useState(item)//will copy current version of item and will make it editable in onChange under<input> tag below.

    return (
        <>
            {
                !editing &&
                //add get only single element after it, so by adding this tags we grouped the items below. we didn't want
                //to add div or anything because we don't want to show them inside anything.
                <>
                    <Link className={`nav-link ${active?'active':''}`} to={to}>
                        {item.title}
                    </Link>
                    <i onClick={() => setEditing(true)} className={"fas fa-edit"}></i>
                </>
            }
            {
                editing &&
                <>
                    <input
                        onChange={(e) => setItemCache({...itemCache, title: e.target.value})}
                        value={itemCache.title}/>
                    <i onClick={() => {
                        setEditing(false)
                        updateItem(itemCache)
                    }}
                       className="fas fa-check"></i>
                    <i onClick={() => deleteItem(item)} className="fas fa-times"></i>
                </>
            }
        </>
    )
}
//This editable item can be used for both modules or lessons, so we don't put reducer here. Instead we put it in parent who is editing which is module-list.
export default EditableItem