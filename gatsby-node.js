exports.createSchemaCustomization = ({ actions, schema }) => {
    const { createTypes } = actions
    const typeDefs = [
        schema.buildObjectType({
            name: 'MarkdownRemark',
            fields: {
                frontmatter: 'Frontmatter!'
            },
            interfaces: ['Node'],
            extensions: {
                infer: true,
            },
        }),
        schema.buildObjectType({
            name: 'Frontmatter',
            fields: {
                startTime: {
                    type: 'String!',
                    resolve(parent) {
                        return `${parent.startTime}`;
                    }
                },
                endTime: {
                    type: 'String!',
                    resolve(parent) {
                        return `${parent.endTime}`;
                    }
                }
            }
        }),
    ]
    createTypes(typeDefs)
}