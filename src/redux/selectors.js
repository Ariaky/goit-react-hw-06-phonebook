import { createSelector } from "@reduxjs/toolkit";

export const getContacts = state => state.contacts.list;

export const getFilterValue = state => state.filter;

export const selectContact = createSelector(
    [getContacts, getFilterValue],
    (list,filter) => {
        return list.filter(list =>
            list.name.toLowerCase().includes(filter.toLowerCase())
        );
    }
)