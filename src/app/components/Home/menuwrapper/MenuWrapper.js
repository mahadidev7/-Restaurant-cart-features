import React from 'react'
import { MenuDummyData } from '../../../data';
import MenuItem from './MenuItem';

function MenuWrapper() {
    const {burgers} = MenuDummyData;

  return (
    <div className="grid gap-2 grid-cols-3">
        <div className="col-span-2 border p-1">
            <div className="grid gap-2 grid-cols-2">
                <div className="border-r border-dotted p-1">
                    <MenuItem name="mr.dfdf fd" description='hello Cow' totalPrice='521' />
                    <MenuItem name="mr.dfdf fd" description='hello Cow' chicken='521' cow='587' />
                </div>
                <div className="border p-1">f</div>
            </div>
        </div>
        <div className="border p-1">sd</div>
    </div>
  )
}

export default MenuWrapper;