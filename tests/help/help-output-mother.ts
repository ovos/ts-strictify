export const TestedVersions = [
  '0.8.0',
  '1.0.0',
  '2.0.0',
  '2.1.4', // looks like there never was a 2.1.0
  '2.6.1', // looks like there never was a 2.6.0
  '2.7.1', // looks like there never was a 2.7.0
  '3.0.1', // looks like there never was a 3.0.1
  '3.2.1', // looks like there never was a 3.2.0
  '4.1.2',
] as const
export type TestedTscVersion = typeof TestedVersions[number]

export const helpOutput: Record<TestedTscVersion, string> = {
  '0.8.0': `Syntax:   tsc [options] [file ..]

Examples: tsc hello.ts
          tsc --out foo.js foo.ts
          tsc @args.txt

Options:
  -c, --comments  Emit comments to output
  --declarations  Generates corresponding .d.ts file
  -e, --exec      Execute the script after compilation
  -h, --help      Print this message
  --module KIND   Specify module code generation: "commonjs" (default) or "amd"
  --nolib         Do not include a default lib.d.ts with global declarations
  --out FILE      Concatenate and emit output to single file
  --target VER    Specify ECMAScript target version: "ES3" (default), or "ES5"
  -w, --watch     Watch output files
  @<file>         Insert command line options and files from a file.
✨  Done in 0.99s.`,
  '1.0.0': `Version 1.0.0.0
Syntax:   tsc [options] [file ..]

Examples: tsc hello.ts
          tsc --out foo.js foo.ts
          tsc @args.txt

Options:
  -d, --declaration             Generates corresponding .d.ts file.
  -h, --help                    Print this message.
  --mapRoot LOCATION            Specifies the location where debugger should locate map files instead of generated locations.
  -m KIND, --module KIND        Specify module code generation: 'commonjs' or 'amd'
  --noImplicitAny               Warn on expressions and declarations with an implied 'any' type.
  --out FILE                    Concatenate and emit output to single file.
  --outDir DIRECTORY            Redirect output structure to the directory.
  --removeComments              Do not emit comments to output.
  --sourcemap                   Generates corresponding .map file.
  --sourceRoot LOCATION         Specifies the location where debugger should locate TypeScript files instead of source locations.
  -t VERSION, --target VERSION  Specify ECMAScript target version: 'ES3' (default), or 'ES5'
  -v, --version                 Print the compiler's version: 1.0.0.0
  -w, --watch                   Watch input files.
  @<file>                       Insert command line options and files from a file.
✨  Done in 0.83s.`,
  '2.0.0': `Version 2.0.0
Syntax:   tsc [options] [file ...]

Examples: tsc hello.ts
          tsc --out file.js file.ts
          tsc @args.txt

Options:
 --allowJs                           Allow javascript files to be compiled.
 --allowSyntheticDefaultImports      Allow default imports from modules with no default export. This does not affect code emit, just typechecking.
 --allowUnreachableCode              Do not report errors on unreachable code.
 --allowUnusedLabels                 Do not report errors on unused labels.
 --baseUrl                           Base directory to resolve non-absolute module names.
 -d, --declaration                   Generates corresponding '.d.ts' file.
 --experimentalDecorators            Enables experimental support for ES7 decorators.
 --forceConsistentCasingInFileNames  Disallow inconsistently-cased references to the same file.
 -h, --help                          Print this message.
 --init                              Initializes a TypeScript project and creates a tsconfig.json file.
 --jsx KIND                          Specify JSX code generation: 'preserve' or 'react'
 --lib                               Specify library files to be included in the compilation: 
                                       'es5' 'es6' 'es2015' 'es7' 'es2016' 'es2017' 'dom' 'webworker' 'scripthost' 'es2015.core' 'es2015.collection' 'es2015.generator' 'es2015.iterable' 'es2015.promise' 'es2015.proxy' 'es2015.reflect' 'es2015.symbol' 'es2015.symbol.wellknown' 'es2016.array.include' 'es2017.object' 'es2017.sharedmemory' 
 --mapRoot LOCATION                  Specify the location where debugger should locate map files instead of generated locations.
 --maxNodeModuleJsDepth              The maximum dependency depth to search under node_modules and load JavaScript files
 -m KIND, --module KIND              Specify module code generation: 'commonjs', 'amd', 'system', 'umd' or 'es2015'
 --moduleResolution                  Specify module resolution strategy: 'node' (Node.js) or 'classic' (TypeScript pre-1.6).
 --newLine NEWLINE                   Specify the end of line sequence to be used when emitting files: 'CRLF' (dos) or 'LF' (unix).
 --noEmit                            Do not emit outputs.
 --noEmitOnError                     Do not emit outputs if any errors were reported.
 --noFallthroughCasesInSwitch        Report errors for fallthrough cases in switch statement.
 --noImplicitAny                     Raise error on expressions and declarations with an implied 'any' type.
 --noImplicitReturns                 Report error when not all code paths in function return a value.
 --noImplicitThis                    Raise error on 'this' expressions with an implied 'any' type.
 --noImplicitUseStrict               Do not emit 'use strict' directives in module output.
 --noUnusedLocals                    Report Errors on Unused Locals.
 --noUnusedParameters                Report Errors on Unused Parameters.
 --outDir DIRECTORY                  Redirect output structure to the directory.
 --outFile FILE                      Concatenate and emit output to single file.
 --preserveConstEnums                Do not erase const enum declarations in generated code.
 --pretty                            Stylize errors and messages using color and context. (experimental)
 -p DIRECTORY, --project DIRECTORY   Compile the project in the given directory.
 --reactNamespace                    Specify the object invoked for createElement and __spread when targeting 'react' JSX emit
 --removeComments                    Do not emit comments to output.
 --rootDir LOCATION                  Specify the root directory of input files. Use to control the output directory structure with --outDir.
 --skipLibCheck                      Skip type checking of declaration files.
 --sourceMap                         Generates corresponding '.map' file.
 --sourceRoot LOCATION               Specify the location where debugger should locate TypeScript files instead of source locations.
 --strictNullChecks                  Enable strict null checks.
 --suppressImplicitAnyIndexErrors    Suppress noImplicitAny errors for indexing objects lacking index signatures.
 -t VERSION, --target VERSION        Specify ECMAScript target version: 'ES3' (default), 'ES5', or 'ES2015'
 --traceResolution                   Enable tracing of the name resolution process.
 --types                             Type declaration files to be included in compilation.
 -v, --version                       Print the compiler's version.
 -w, --watch                         Watch input files.
 @<file>                             Insert command line options and files from a file.
✨  Done in 0.59s.
yarn run v1.22.4`,
  '2.1.4': `Version 2.1.4
Syntax:   tsc [options] [file ...]

Examples: tsc hello.ts
          tsc --outFile file.js file.ts
          tsc @args.txt

Options:
 --allowJs                           Allow javascript files to be compiled.
 --allowSyntheticDefaultImports      Allow default imports from modules with no default export. This does not affect code emit, just typechecking.
 --allowUnreachableCode              Do not report errors on unreachable code.
 --allowUnusedLabels                 Do not report errors on unused labels.
 --alwaysStrict                      Parse in strict mode and emit "use strict" for each source file
 --baseUrl                           Base directory to resolve non-absolute module names.
 -d, --declaration                   Generates corresponding '.d.ts' file.
 --experimentalDecorators            Enables experimental support for ES7 decorators.
 --forceConsistentCasingInFileNames  Disallow inconsistently-cased references to the same file.
 -h, --help                          Print this message.
 --importHelpers                     Import emit helpers from 'tslib'.
 --init                              Initializes a TypeScript project and creates a tsconfig.json file.
 --jsx KIND                          Specify JSX code generation: 'preserve' or 'react'
 --jsxFactory                        Specify the JSX factory function to use when targeting 'react' JSX emit, e.g. 'React.createElement' or 'h'.
 --lib                               Specify library files to be included in the compilation: 
                                       'es5' 'es6' 'es2015' 'es7' 'es2016' 'es2017' 'dom' 'dom.iterable' 'webworker' 'scripthost' 'es2015.core' 'es2015.collection' 'es2015.generator' 'es2015.iterable' 'es2015.promise' 'es2015.proxy' 'es2015.reflect' 'es2015.symbol' 'es2015.symbol.wellknown' 'es2016.array.include' 'es2017.object' 'es2017.sharedmemory' 'es2017.string' 
 --mapRoot LOCATION                  Specify the location where debugger should locate map files instead of generated locations.
 --maxNodeModuleJsDepth              The maximum dependency depth to search under node_modules and load JavaScript files
 -m KIND, --module KIND              Specify module code generation: 'commonjs', 'amd', 'system', 'umd' or 'es2015'
 --moduleResolution STRATEGY         Specify module resolution strategy: 'node' (Node.js) or 'classic' (TypeScript pre-1.6).
 --newLine NEWLINE                   Specify the end of line sequence to be used when emitting files: 'CRLF' (dos) or 'LF' (unix).
 --noEmit                            Do not emit outputs.
 --noEmitOnError                     Do not emit outputs if any errors were reported.
 --noFallthroughCasesInSwitch        Report errors for fallthrough cases in switch statement.
 --noImplicitAny                     Raise error on expressions and declarations with an implied 'any' type.
 --noImplicitReturns                 Report error when not all code paths in function return a value.
 --noImplicitThis                    Raise error on 'this' expressions with an implied 'any' type.
 --noImplicitUseStrict               Do not emit 'use strict' directives in module output.
 --noUnusedLocals                    Report errors on unused locals.
 --noUnusedParameters                Report errors on unused parameters.
 --outDir DIRECTORY                  Redirect output structure to the directory.
 --outFile FILE                      Concatenate and emit output to single file.
 --preserveConstEnums                Do not erase const enum declarations in generated code.
 --pretty                            Stylize errors and messages using color and context. (experimental)
 -p DIRECTORY, --project DIRECTORY   Compile the project in the given directory.
 --reactNamespace                    Specify the object invoked for createElement and __spread when targeting 'react' JSX emit
 --removeComments                    Do not emit comments to output.
 --rootDir LOCATION                  Specify the root directory of input files. Use to control the output directory structure with --outDir.
 --skipLibCheck                      Skip type checking of declaration files.
 --sourceMap                         Generates corresponding '.map' file.
 --sourceRoot LOCATION               Specify the location where debugger should locate TypeScript files instead of source locations.
 --strictNullChecks                  Enable strict null checks.
 --suppressImplicitAnyIndexErrors    Suppress noImplicitAny errors for indexing objects lacking index signatures.
 -t VERSION, --target VERSION        Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', or 'ESNEXT'
 --traceResolution                   Enable tracing of the name resolution process.
 --types                             Type declaration files to be included in compilation.
 -v, --version                       Print the compiler's version.
 -w, --watch                         Watch input files.
 @<file>                             Insert command line options and files from a file.
✨  Done in 0.67s.`,
  '2.6.1': `Version 2.6.1
Syntax:   tsc [options] [file ...]

Examples: tsc hello.ts
          tsc --outFile file.js file.ts
          tsc @args.txt

Options:
 -h, --help                                         Print this message.
 --all                                              Show all compiler options.
 -v, --version                                      Print the compiler's version.
 --init                                             Initializes a TypeScript project and creates a tsconfig.json file.
 -p FILE OR DIRECTORY, --project FILE OR DIRECTORY  Compile the project given the path to its configuration file, or to a folder with a 'tsconfig.json'.
 --pretty                                           Stylize errors and messages using color and context (experimental).
 -w, --watch                                        Watch input files.
 -t VERSION, --target VERSION                       Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', or 'ESNEXT'.
 -m KIND, --module KIND                             Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', or 'ESNext'.
 --lib                                              Specify library files to be included in the compilation: 
                                                      'es5' 'es6' 'es2015' 'es7' 'es2016' 'es2017' 'esnext' 'dom' 'dom.iterable' 'webworker' 'scripthost' 'es2015.core' 'es2015.collection' 'es2015.generator' 'es2015.iterable' 'es2015.promise' 'es2015.proxy' 'es2015.reflect' 'es2015.symbol' 'es2015.symbol.wellknown' 'es2016.array.include' 'es2017.object' 'es2017.sharedmemory' 'es2017.string' 'es2017.intl' 'esnext.asynciterable' 
 --allowJs                                          Allow javascript files to be compiled.
 --jsx KIND                                         Specify JSX code generation: 'preserve', 'react-native', or 'react'.
 -d, --declaration                                  Generates corresponding '.d.ts' file.
 --sourceMap                                        Generates corresponding '.map' file.
 --outFile FILE                                     Concatenate and emit output to single file.
 --outDir DIRECTORY                                 Redirect output structure to the directory.
 --removeComments                                   Do not emit comments to output.
 --noEmit                                           Do not emit outputs.
 --strict                                           Enable all strict type-checking options.
 --noImplicitAny                                    Raise error on expressions and declarations with an implied 'any' type.
 --strictNullChecks                                 Enable strict null checks.
 --strictFunctionTypes                              Enable strict checking of function types.
 --noImplicitThis                                   Raise error on 'this' expressions with an implied 'any' type.
 --alwaysStrict                                     Parse in strict mode and emit "use strict" for each source file.
 --noUnusedLocals                                   Report errors on unused locals.
 --noUnusedParameters                               Report errors on unused parameters.
 --noImplicitReturns                                Report error when not all code paths in function return a value.
 --noFallthroughCasesInSwitch                       Report errors for fallthrough cases in switch statement.
 --types                                            Type declaration files to be included in compilation.
 @<file>                                            Insert command line options and files from a file.
✨  Done in 0.76s.`,
  '2.7.1': `Version 2.7.1
Syntax:   tsc [options] [file ...]

Examples: tsc hello.ts
          tsc --outFile file.js file.ts
          tsc @args.txt

Options:
 -h, --help                                         Print this message.
 --all                                              Show all compiler options.
 -v, --version                                      Print the compiler's version.
 --init                                             Initializes a TypeScript project and creates a tsconfig.json file.
 -p FILE OR DIRECTORY, --project FILE OR DIRECTORY  Compile the project given the path to its configuration file, or to a folder with a 'tsconfig.json'.
 --pretty                                           Stylize errors and messages using color and context (experimental).
 -w, --watch                                        Watch input files.
 -t VERSION, --target VERSION                       Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017','ES2018' or 'ESNEXT'.
 -m KIND, --module KIND                             Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', or 'ESNext'.
 --lib                                              Specify library files to be included in the compilation.
                                                      'es5' 'es6' 'es2015' 'es7' 'es2016' 'es2017' 'es2018' 'esnext' 'dom' 'dom.iterable' 'webworker' 'scripthost' 'es2015.core' 'es2015.collection' 'es2015.generator' 'es2015.iterable' 'es2015.promise' 'es2015.proxy' 'es2015.reflect' 'es2015.symbol' 'es2015.symbol.wellknown' 'es2016.array.include' 'es2017.object' 'es2017.sharedmemory' 'es2017.string' 'es2017.intl' 'es2017.typedarrays' 'esnext.array' 'esnext.asynciterable' 'esnext.promise' 
 --allowJs                                          Allow javascript files to be compiled.
 --jsx KIND                                         Specify JSX code generation: 'preserve', 'react-native', or 'react'.
 -d, --declaration                                  Generates corresponding '.d.ts' file.
 --sourceMap                                        Generates corresponding '.map' file.
 --outFile FILE                                     Concatenate and emit output to single file.
 --outDir DIRECTORY                                 Redirect output structure to the directory.
 --removeComments                                   Do not emit comments to output.
 --noEmit                                           Do not emit outputs.
 --strict                                           Enable all strict type-checking options.
 --noImplicitAny                                    Raise error on expressions and declarations with an implied 'any' type.
 --strictNullChecks                                 Enable strict null checks.
 --strictFunctionTypes                              Enable strict checking of function types.
 --strictPropertyInitialization                     Enable strict checking of property initialization in classes.
 --noImplicitThis                                   Raise error on 'this' expressions with an implied 'any' type.
 --alwaysStrict                                     Parse in strict mode and emit "use strict" for each source file.
 --noUnusedLocals                                   Report errors on unused locals.
 --noUnusedParameters                               Report errors on unused parameters.
 --noImplicitReturns                                Report error when not all code paths in function return a value.
 --noFallthroughCasesInSwitch                       Report errors for fallthrough cases in switch statement.
 --types                                            Type declaration files to be included in compilation.
 --esModuleInterop                                  Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'.
 @<file>                                            Insert command line options and files from a file.
✨  Done in 0.57s.`,
  '3.0.1': `Version 3.0.1
Syntax:   tsc [options] [file...]

Examples: tsc hello.ts
          tsc --outFile file.js file.ts
          tsc @args.txt
          tsc --build tsconfig.json

Options:
 -h, --help                                         Print this message.
 --all                                              Show all compiler options.
 -v, --version                                      Print the compiler's version.
 --init                                             Initializes a TypeScript project and creates a tsconfig.json file.
 -p FILE OR DIRECTORY, --project FILE OR DIRECTORY  Compile the project given the path to its configuration file, or to a folder with a 'tsconfig.json'.
 -b, --build                                        Build one or more projects and their dependencies, if out of date
 --pretty                                           Stylize errors and messages using color and context (experimental).
 -w, --watch                                        Watch input files.
 -t VERSION, --target VERSION                       Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017','ES2018' or 'ESNEXT'.
 -m KIND, --module KIND                             Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', or 'ESNext'.
 --lib                                              Specify library files to be included in the compilation.
                                                      'es5' 'es6' 'es2015' 'es7' 'es2016' 'es2017' 'es2018' 'esnext' 'dom' 'dom.iterable' 'webworker' 'webworker.importscripts' 'scripthost' 'es2015.core' 'es2015.collection' 'es2015.generator' 'es2015.iterable' 'es2015.promise' 'es2015.proxy' 'es2015.reflect' 'es2015.symbol' 'es2015.symbol.wellknown' 'es2016.array.include' 'es2017.object' 'es2017.sharedmemory' 'es2017.string' 'es2017.intl' 'es2017.typedarrays' 'es2018.intl' 'es2018.promise' 'es2018.regexp' 'esnext.array' 'esnext.symbol' 'esnext.asynciterable' 'esnext.intl' 
 --allowJs                                          Allow javascript files to be compiled.
 --jsx KIND                                         Specify JSX code generation: 'preserve', 'react-native', or 'react'.
 -d, --declaration                                  Generates corresponding '.d.ts' file.
 --declarationMap                                   Generates a sourcemap for each corresponding '.d.ts' file.
 --sourceMap                                        Generates corresponding '.map' file.
 --outFile FILE                                     Concatenate and emit output to single file.
 --outDir DIRECTORY                                 Redirect output structure to the directory.
 --removeComments                                   Do not emit comments to output.
 --noEmit                                           Do not emit outputs.
 --strict                                           Enable all strict type-checking options.
 --noImplicitAny                                    Raise error on expressions and declarations with an implied 'any' type.
 --strictNullChecks                                 Enable strict null checks.
 --strictFunctionTypes                              Enable strict checking of function types.
 --strictPropertyInitialization                     Enable strict checking of property initialization in classes.
 --noImplicitThis                                   Raise error on 'this' expressions with an implied 'any' type.
 --alwaysStrict                                     Parse in strict mode and emit "use strict" for each source file.
 --noUnusedLocals                                   Report errors on unused locals.
 --noUnusedParameters                               Report errors on unused parameters.
 --noImplicitReturns                                Report error when not all code paths in function return a value.
 --noFallthroughCasesInSwitch                       Report errors for fallthrough cases in switch statement.
 --types                                            Type declaration files to be included in compilation.
 --esModuleInterop                                  Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'.
 @<file>                                            Insert command line options and files from a file.
✨  Done in 0.95s.`,
  '3.2.1': `Version 3.2.1
Syntax:   tsc [options] [file...]

Examples: tsc hello.ts
          tsc --outFile file.js file.ts
          tsc @args.txt
          tsc --build tsconfig.json

Options:
 -h, --help                                         Print this message.
 -w, --watch                                        Watch input files.
 --pretty                                           Stylize errors and messages using color and context (experimental).
 --all                                              Show all compiler options.
 -v, --version                                      Print the compiler's version.
 --init                                             Initializes a TypeScript project and creates a tsconfig.json file.
 -p FILE OR DIRECTORY, --project FILE OR DIRECTORY  Compile the project given the path to its configuration file, or to a folder with a 'tsconfig.json'.
 -b, --build                                        Build one or more projects and their dependencies, if out of date
 -t VERSION, --target VERSION                       Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017','ES2018' or 'ESNEXT'.
 -m KIND, --module KIND                             Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', or 'ESNext'.
 --lib                                              Specify library files to be included in the compilation.
                                                      'es5' 'es6' 'es2015' 'es7' 'es2016' 'es2017' 'es2018' 'esnext' 'dom' 'dom.iterable' 'webworker' 'webworker.importscripts' 'scripthost' 'es2015.core' 'es2015.collection' 'es2015.generator' 'es2015.iterable' 'es2015.promise' 'es2015.proxy' 'es2015.reflect' 'es2015.symbol' 'es2015.symbol.wellknown' 'es2016.array.include' 'es2017.object' 'es2017.sharedmemory' 'es2017.string' 'es2017.intl' 'es2017.typedarrays' 'es2018.intl' 'es2018.promise' 'es2018.regexp' 'esnext.array' 'esnext.symbol' 'esnext.asynciterable' 'esnext.intl' 'esnext.bigint' 
 --allowJs                                          Allow javascript files to be compiled.
 --jsx KIND                                         Specify JSX code generation: 'preserve', 'react-native', or 'react'.
 -d, --declaration                                  Generates corresponding '.d.ts' file.
 --declarationMap                                   Generates a sourcemap for each corresponding '.d.ts' file.
 --sourceMap                                        Generates corresponding '.map' file.
 --outFile FILE                                     Concatenate and emit output to single file.
 --outDir DIRECTORY                                 Redirect output structure to the directory.
 --removeComments                                   Do not emit comments to output.
 --noEmit                                           Do not emit outputs.
 --strict                                           Enable all strict type-checking options.
 --noImplicitAny                                    Raise error on expressions and declarations with an implied 'any' type.
 --strictNullChecks                                 Enable strict null checks.
 --strictFunctionTypes                              Enable strict checking of function types.
 --strictBindCallApply                              Enable strict 'bind', 'call', and 'apply' methods on functions.
 --strictPropertyInitialization                     Enable strict checking of property initialization in classes.
 --noImplicitThis                                   Raise error on 'this' expressions with an implied 'any' type.
 --alwaysStrict                                     Parse in strict mode and emit "use strict" for each source file.
 --noUnusedLocals                                   Report errors on unused locals.
 --noUnusedParameters                               Report errors on unused parameters.
 --noImplicitReturns                                Report error when not all code paths in function return a value.
 --noFallthroughCasesInSwitch                       Report errors for fallthrough cases in switch statement.
 --types                                            Type declaration files to be included in compilation.
 --esModuleInterop                                  Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'.
 @<file>                                            Insert command line options and files from a file.
✨  Done in 0.51s.`,
  '4.1.2': `Version 4.1.2
Syntax:   tsc [options] [file...]

Examples: tsc hello.ts
          tsc --outFile file.js file.ts
          tsc @args.txt
          tsc --build tsconfig.json

Options:
 --all                                              Show all compiler options.
 --allowJs                                          Allow javascript files to be compiled.
 --allowSyntheticDefaultImports                     Allow default imports from modules with no default export. This does not affect code emit, just typechecking.
 --allowUmdGlobalAccess                             Allow accessing UMD globals from modules.
 --allowUnreachableCode                             Do not report errors on unreachable code.
 --allowUnusedLabels                                Do not report errors on unused labels.
 --alwaysStrict                                     Parse in strict mode and emit "use strict" for each source file.
 --assumeChangesOnlyAffectDirectDependencies        Have recompiles in '--incremental' and '--watch' assume that changes within a file will only affect files directly depending on it.
 --baseUrl                                          Base directory to resolve non-absolute module names.
 -b, --build                                        Build one or more projects and their dependencies, if out of date
 --charset                                          The character set of the input files.
 --checkJs                                          Report errors in .js files.
 --composite                                        Enable project compilation
 -d, --declaration                                  Generates corresponding '.d.ts' file.
 --declarationDir DIRECTORY                         Output directory for generated declaration files.
 --declarationMap                                   Generates a sourcemap for each corresponding '.d.ts' file.
 --diagnostics                                      Show diagnostic information.
 --disableReferencedProjectLoad                     Disable loading referenced projects.
 --disableSizeLimit                                 Disable size limitations on JavaScript projects.
 --disableSolutionSearching                         Disable solution searching for this project.
 --disableSourceOfProjectReferenceRedirect          Disable use of source files instead of declaration files from referenced projects.
 --downlevelIteration                               Provide full support for iterables in 'for-of', spread, and destructuring when targeting 'ES5' or 'ES3'.
 --emitBOM                                          Emit a UTF-8 Byte Order Mark (BOM) in the beginning of output files.
 --emitDeclarationOnly                              Only emit '.d.ts' declaration files.
 --emitDecoratorMetadata                            Enables experimental support for emitting type metadata for decorators.
 --esModuleInterop                                  Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'.
 --experimentalDecorators                           Enables experimental support for ES7 decorators.
 --extendedDiagnostics                              Show verbose diagnostic information.
 --forceConsistentCasingInFileNames                 Disallow inconsistently-cased references to the same file.
 --generateCpuProfile FILE OR DIRECTORY             Generates a CPU profile.
 --generateTrace DIRECTORY                          Generates an event trace and a list of types.
 -h, --help                                         Print this message.
 --importHelpers                                    Import emit helpers from 'tslib'.
 --importsNotUsedAsValues                           Specify emit/checking behavior for imports that are only used for types
 -i, --incremental                                  Enable incremental compilation
 --init                                             Initializes a TypeScript project and creates a tsconfig.json file.
 --inlineSourceMap                                  Emit a single file with source maps instead of having a separate file.
 --inlineSources                                    Emit the source alongside the sourcemaps within a single file; requires '--inlineSourceMap' or '--sourceMap' to be set.
 --isolatedModules                                  Transpile each file as a separate module (similar to 'ts.transpileModule').
 --jsx KIND                                         Specify JSX code generation: 'preserve', 'react-native', or 'react'.
 --jsxFactory                                       Specify the JSX factory function to use when targeting 'react' JSX emit, e.g. 'React.createElement' or 'h'.
 --jsxFragmentFactory                               Specify the JSX fragment factory function to use when targeting 'react' JSX emit with 'jsxFactory' compiler option is specified, e.g. 'Fragment'.
 --jsxImportSource                                  Specify the module specifier to be used to import the \`jsx\` and \`jsxs\` factory functions from. eg, react
 --keyofStringsOnly                                 Resolve 'keyof' to string valued property names only (no numbers or symbols).
 --lib                                              Specify library files to be included in the compilation.
                                                      'es5' 'es6' 'es2015' 'es7' 'es2016' 'es2017' 'es2018' 'es2019' 'es2020' 'esnext' 'dom' 'dom.iterable' 'webworker' 'webworker.importscripts' 'webworker.iterable' 'scripthost' 'es2015.core' 'es2015.collection' 'es2015.generator' 'es2015.iterable' 'es2015.promise' 'es2015.proxy' 'es2015.reflect' 'es2015.symbol' 'es2015.symbol.wellknown' 'es2016.array.include' 'es2017.object' 'es2017.sharedmemory' 'es2017.string' 'es2017.intl' 'es2017.typedarrays' 'es2018.asyncgenerator' 'es2018.asynciterable' 'es2018.intl' 'es2018.promise' 'es2018.regexp' 'es2019.array' 'es2019.object' 'es2019.string' 'es2019.symbol' 'es2020.bigint' 'es2020.promise' 'es2020.sharedmemory' 'es2020.string' 'es2020.symbol.wellknown' 'es2020.intl' 'esnext.array' 'esnext.symbol' 'esnext.asynciterable' 'esnext.intl' 'esnext.bigint' 'esnext.string' 'esnext.promise' 'esnext.weakref' 
 --listEmittedFiles                                 Print names of generated files part of the compilation.
 --listFiles                                        Print names of files part of the compilation.
 --listFilesOnly                                    Print names of files that are part of the compilation and then stop processing.
 --locale                                           The locale used when displaying messages to the user (e.g. 'en-us')
 --mapRoot LOCATION                                 Specify the location where debugger should locate map files instead of generated locations.
 --maxNodeModuleJsDepth                             The maximum dependency depth to search under node_modules and load JavaScript files.
 -m KIND, --module KIND                             Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', 'es2020', or 'ESNext'.
 --moduleResolution STRATEGY                        Specify module resolution strategy: 'node' (Node.js) or 'classic' (TypeScript pre-1.6).
 --newLine NEWLINE                                  Specify the end of line sequence to be used when emitting files: 'CRLF' (dos) or 'LF' (unix).
 --noEmit                                           Do not emit outputs.
 --noEmitHelpers                                    Do not generate custom helper functions like '__extends' in compiled output.
 --noEmitOnError                                    Do not emit outputs if any errors were reported.
 --noErrorTruncation                                Do not truncate error messages.
 --noFallthroughCasesInSwitch                       Report errors for fallthrough cases in switch statement.
 --noImplicitAny                                    Raise error on expressions and declarations with an implied 'any' type.
 --noImplicitReturns                                Report error when not all code paths in function return a value.
 --noImplicitThis                                   Raise error on 'this' expressions with an implied 'any' type.
 --noImplicitUseStrict                              Do not emit 'use strict' directives in module output.
 --noLib                                            Do not include the default library file (lib.d.ts).
 --noResolve                                        Do not add triple-slash references or imported modules to the list of compiled files.
 --noStrictGenericChecks                            Disable strict checking of generic signatures in function types.
 --noUncheckedIndexedAccess                         Include 'undefined' in index signature results
 --noUnusedLocals                                   Report errors on unused locals.
 --noUnusedParameters                               Report errors on unused parameters.
 --out FILE                                         [Deprecated] Use '--outFile' instead. Concatenate and emit output to single file
 --outDir DIRECTORY                                 Redirect output structure to the directory.
 --outFile FILE                                     Concatenate and emit output to single file.
 --paths                                            A series of entries which re-map imports to lookup locations relative to the 'baseUrl'.
 --plugins                                          List of language service plugins.
 --preserveConstEnums                               Do not erase const enum declarations in generated code.
 --preserveSymlinks                                 Do not resolve the real path of symlinks.
 --preserveWatchOutput                              Whether to keep outdated console output in watch mode instead of clearing the screen.
 --pretty                                           Stylize errors and messages using color and context (experimental).
 -p FILE OR DIRECTORY, --project FILE OR DIRECTORY  Compile the project given the path to its configuration file, or to a folder with a 'tsconfig.json'.
 --reactNamespace                                   [Deprecated] Use '--jsxFactory' instead. Specify the object invoked for createElement when targeting 'react' JSX emit
 --removeComments                                   Do not emit comments to output.
 --resolveJsonModule                                Include modules imported with '.json' extension
 --rootDir LOCATION                                 Specify the root directory of input files. Use to control the output directory structure with --outDir.
 --rootDirs                                         List of root folders whose combined content represents the structure of the project at runtime.
 --showConfig                                       Print the final configuration instead of building.
 --skipDefaultLibCheck                              [Deprecated] Use '--skipLibCheck' instead. Skip type checking of default library declaration files.
 --skipLibCheck                                     Skip type checking of declaration files.
 --sourceMap                                        Generates corresponding '.map' file.
 --sourceRoot LOCATION                              Specify the location where debugger should locate TypeScript files instead of source locations.
 --strict                                           Enable all strict type-checking options.
 --strictBindCallApply                              Enable strict 'bind', 'call', and 'apply' methods on functions.
 --strictFunctionTypes                              Enable strict checking of function types.
 --strictNullChecks                                 Enable strict null checks.
 --strictPropertyInitialization                     Enable strict checking of property initialization in classes.
 --stripInternal                                    Do not emit declarations for code that has an '@internal' annotation.
 --suppressExcessPropertyErrors                     Suppress excess property checks for object literals.
 --suppressImplicitAnyIndexErrors                   Suppress noImplicitAny errors for indexing objects lacking index signatures.
 -t VERSION, --target VERSION                       Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', or 'ESNEXT'.
 --traceResolution                                  Enable tracing of the name resolution process.
 --tsBuildInfoFile FILE                             Specify file to store incremental compilation information
 --typeRoots                                        List of folders to include type definitions from.
 --types                                            Type declaration files to be included in compilation.
 --useDefineForClassFields                          Emit class fields with Define instead of Set.
 -v, --version                                      Print the compiler's version.
 -w, --watch                                        Watch input files.
 @<file>                                            Insert command line options and files from a file.`,
}
