type FieldNode = {
    type?: string,
    fields?: Record<string, FieldNode>
};

const schemas = {
    Button: {
        appearance: {
            fields: {
                color: {
                    type: 'color'
                },
                opacity: {
                    type: 'fraction'
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