
export const forms = {
    form_elements: [
        {
            col_type: 'col-2',
            elements: [
                {
                    type: 'text',
                    label: 'First Name',
                    required: true,
                    element_id: '100',
                },
                {
                    type: 'text',
                    label: 'Last Name',
                    required: true,
                    element_id: '110',
                },
            ],
        },
        {
            col_type: 'col-1',
            elements: [
                {
                    type: 'email',
                    label: 'Email',
                    required: true,
                    element_id: '120',
                },
            ],
        },
        {
            col_type: 'col-1',
            elements: [
                {
                    type: 'phone',
                    label: 'Mobile',
                    required: false,
                    element_id: '130',
                },
            ],
        },
    ],
}
