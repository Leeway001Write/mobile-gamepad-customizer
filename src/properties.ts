type FieldNode = {
    type: string,
    default?: string | number 
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
                    type: 'percent', default: 0
                },
                position: {
                    fields: {
                        x: {
                            type: 'percent', default: 20
                        },
                        y: {
                            type: 'percent', default: 20
                        }
                    }
                },
                size: {
                    fields: {
                        x: {
                            type: 'percent', default: 0
                        },
                        y: {
                            type: 'percent', default: 0
                        }
                    }
                },
                layer: {
                    type: 'number', default: 1
                },
                border: {
                    fields: {
                        color: {
                            type: 'color'
                        },
                        thickness: {
                            type: 'pixels', default: 0
                        },
                        radius: {
                            type: 'pixels', default: 3
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