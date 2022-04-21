const componentAction =[
  {
    type: 'add',
    path: '../src/components/{{pascalCase name}}/index.tsx',
    templateFile: 'templates/index.ts.hbs',
  },
  {
    type: 'add',
    path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
    templateFile: 'templates/component.tsx.hbs',
  },
  {
    type: 'add',
    path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
    templateFile: 'templates/component.test.tsx.hbs',
  },
  {
    type: 'add',
    path: '../src/components/{{pascalCase name}}/styles.tsx',
    templateFile: 'templates/styles.tsx.hbs',
  },
  {
    type: 'add',
    path: '../src/components/{{pascalCase name}}/stories.tsx',
    templateFile: 'templates/stories.tsx.hbs',
  },
  {
    type: 'modify',
    path: '../src/components/index.ts',
    pattern: /( --- NEW COMPONENTS ---)/gi,
    template:
      '$1\nimport { {{pascalCase name}} } from "./{{pascalCase name}}"',
  },
  {
    type: 'modify',
    path: '../src/components/index.ts',
    pattern: /(--- EXPORT NEW COMPONENTS ---)/gi,
    template: '$1\n  {{pascalCase name}},',
  },
]

const hookAction =[
  {
    type: 'add',
    path: '../src/hooks/use{{pascalCase name}}.ts',
    templateFile: 'templates/hook.ts.hbs',
  },
  {
    type: 'modify',
    path: '../src/hooks/index.ts',
    pattern: /( --- NEW HOOK ---)/gi,
    template:
      '$1\nimport { use{{pascalCase name}} } from "./use{{pascalCase name}}"',
  },
  {
    type: 'modify',
    path: '../src/hooks/index.ts',
    pattern: /(--- EXPORT NEW HOOK ---)/gi,
    template: '$1\n  use{{pascalCase name}},',
  },
]

const helperAction =[
  {
    type: 'add',
    path: '../src/helpers/helper{{pascalCase name}}.ts',
    templateFile: 'templates/helper.ts.hbs',
  },
  {
    type: 'modify',
    path: '../src/helpers/index.ts',
    pattern: /( --- NEW HELPER ---)/gi,
    template:
      '$1\nimport { helper{{pascalCase name}} } from "./helper{{pascalCase name}}"',
  },
  {
    type: 'modify',
    path: '../src/helpers/index.ts',
    pattern: /(--- EXPORT NEW HELPER ---)/gi,
    template: '$1\n  helper{{pascalCase name}},',
  },
]

const typeAction =[
  {
    type: 'add',
    path: '../src/types/{{pascalCase name}}Type.ts',
    templateFile: 'templates/type.ts.hbs',
  }
]


module.exports = (plop) =>{
  // controller generator
  plop.setGenerator('controller', {
    description: 'application controller logic',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Enter the element name',
      }, {
        type: 'list',
        name: 'type',
        message: 'Select the element type: ',
        choices: [
          {name: 'Component', value: 'component',checked: true},
          {name: 'Hook', value: 'hook'},
          {name: 'Type', value: 'type'},
          {name: 'Helper', value: 'helper'},
        ],
      },
    ],
    actions: (data)=> {
      switch (data.type) {
        case 'component':
          return [...componentAction];
        case 'hook':
          return [...hookAction];
        case 'type':
          return [...typeAction ];
        case 'helper':
          return [...helperAction];
        default:
          return new Error('Invalid Type');
      }
    },
  });
};


