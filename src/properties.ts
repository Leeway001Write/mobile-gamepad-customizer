type FieldNode = {
    type: string,
    default: string | number 
} |
{
    fields: Record<string, FieldNode>
};

const schemas = {
    Button: {
        appearance: {
            fields: {
                color: {
                    type: 'color'
                },
                opacity: {
                    type: 'percent'
                },
                position: {
                    fields: {
                        x: {
                            type: 'percent'
                        },
                        y: {
                            type: 'percent'
                        }
                    }
                },
                size: {
                    fields: {
                        x: {
                            type: 'percent'
                        },
                        y: {
                            type: 'percent'
                        }
                    }
                },
                zIndex: {
                    type: 'number'
                },
                border: {
                    // type: 'checkbox',
                    fields: {
                        color: {
                            type: 'color'
                        },
                        thickness: {
                            type: 'pixels'
                        },
                        radius: {
                            type: 'pixels'
                        }
                    },
                },
                label: {
                    type: 'string'
                }
            }
        }
    }
}

export { type FieldNode }
export { schemas }