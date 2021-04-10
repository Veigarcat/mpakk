import React        from 'react';
import TableEntry   from './TableEntry';

const TableContents = (props) => {

    const entries = props.activeList ? props.activeList.items : null;
    return (
        entries ? <div className=' table-entries container-primary'>
            {
                entries.map((entry, index) => (
                    <TableEntry
                        data={entry} key={entry.id}
                        deleteItem={props.deleteItem} reorderItem={props.reorderItem}
                        editItem={props.editItem}
                        ownerId={props.activeList.owner}
                        itemIndex={index}
                        lastItemIndex={props.activeList.items.length-1}
                    />
                ))
            }

            </div>
            : <div className='container-primary' />
    );
};

export default TableContents;