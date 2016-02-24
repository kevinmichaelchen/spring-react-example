(function () {

    requirejs.config({
        packages: [
            {name: 'rest', location: 'node_modules/rest', main: 'browser'},
            {name: 'when', location: 'node_modules/when', main: 'when'},
            {name: 'react', location: 'node_modules/react', main: 'react'},
            {name: 'JSXTransformer', location: 'node_modules/react', main: 'JSXTransformer'},
            {name: 'jsx', location: 'node_modules/requirejs-react-jsx', main: 'jsx'},
            {name: 'text', location: 'node_modules/requirejs-text', main: 'text'}
        ],
        waitSeconds: 45,
        shim: {
            "react": {
                "exports": "React"
            },
            "JSXTransformer": "JSXTransformer"
        },
        deps: ['main'],
        config: {
            jsx: {
                fileExtension: ".jsx",
                transformOptions: {
                    harmony: true,
                    stripTypes: false,
                    inlineSourceMap: true
                },
                usePragma: true
            }
        }
    });

}());