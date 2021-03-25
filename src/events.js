import * as React from "react";

import {
    Datagrid,
    List,
    Show,
    Create,
    Edit,
    Filter,
    SimpleShowLayout,
    SimpleForm,
    TextField,
    TextInput,
    ShowButton,
    EditButton,
    DeleteButton,
    ImageField,
    ImageInput,
    DateField,
    RichTextField,
    DateTimeInput,
} from "react-admin";
import RichTextInput from "ra-input-rich-text";


const EventFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Поиск" source="title" alwaysOn />
    </Filter>
);

export const EventList = props => (
    <List {...props} filters={<EventFilter />}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="title" label="Название" />
            <RichTextField source="description" label="Описание" />
            <DateField source="datetime" label="Дата проведения" showTime={true} />
            <ShowButton label="" />
            <EditButton label="" />
            <DeleteButton label="" redirect={false} />
        </Datagrid>
    </List>
);

export const EventShow = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="title" label="Название" />
            <RichTextField source="description" label="Описание" />
            <DateField source="datetime" label="Дата проведения" showTime={true} />
            <ImageField source="image.src" title="image.title" label="Изображение" />
        </SimpleShowLayout>
    </Show>
);

export const EventCreate = (props) => (
    <Create {...props} >
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="title" label="Название" />
            <RichTextInput source="description" label="Описание" />
            <DateTimeInput source="datetime" />
            <ImageInput source="image" label="Изображение">
                <ImageField source="src" title="title" />
            </ImageInput>
        </SimpleForm>
    </Create>
);

export const EventEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextField source="id" />
            <TextInput source="title" label="Название" />
            <RichTextInput source="description" label="Описание" />
            <DateTimeInput source="datetime" />
            <ImageInput source="image" label="Изображение">
                <ImageField source="src" title="title" />
            </ImageInput>
        </SimpleForm>
    </Edit>
);