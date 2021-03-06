import { Component, OnInit, AfterViewInit, ViewChild, QueryList, ViewChildren, ElementRef } from '@angular/core';
import { Schema } from '../../../schema/models/schema.model';
import { SchemaFactoryService } from '../../../schema/services/schema-factory/schema-factory.service';
import * as alertExampleHtml from '!raw-loader!./examples/alert-example.component.html';
import * as alertExampleTs from '!raw-loader!./examples/alert-example.component.ts';
import * as alertExampleScs from '!raw-loader!./examples/alert-example.component.scss';
import * as alertContent from '!raw-loader!./examples/alert-content.component.ts';
import * as alertComponentAsContentExample from '!raw-loader!./examples/alert-component-as-content-example.component.ts';
import * as alertComponentAsContentExampleModule from '!raw-loader!./examples/alert-component-as-content.module.ts';
import * as alertComponentAsContentExampleH from '!raw-loader!./examples/alert-component-as-content-example.component.html';
import * as alertComponentAsContentExampleScss from '!raw-loader!./examples/alert-component-as-content-example.component.scss';
import * as alertInlineExampleHtml from '!raw-loader!./examples/alert-inline-example.component.html';
import * as alertInlineExampleTs from '!raw-loader!./examples/alert-inline-example.component.ts';
import * as alertInlineExampleScs from '!raw-loader!./examples/alert-inline-example.component.scss';
import * as alertWidthExampleHtml from '!raw-loader!./examples/alert-width-example.component.html';
import * as alertWidthExampleTs from '!raw-loader!./examples/alert-width-example.component.ts';
import * as alertWidthExampleScss from '!raw-loader!./examples/alert-width-example.component.scss';
import { ExampleFile } from '../../../documentation/core-helpers/code-example/example-file';
import { AlertExampleComponent } from './examples/alert-example.component';

@Component({
    selector: 'app-alert',
    templateUrl: './alert-docs.component.html',
})
export class AlertDocsComponent implements OnInit {
    static schema: any = {
        properties: {
            properties: {
                type: 'object',
                properties: {
                    dismissible: {
                        type: 'boolean'
                    },
                    mousePersist: {
                        type: 'boolean'
                    },
                    width: {
                        type: 'string'
                    },
                    message: {
                        type: 'string'
                    },
                    duration: {
                        type: 'string'
                    }
                }
            },
            modifier: {
                type: 'object',
                properties: {
                    type: {
                        type: 'string',
                        enum: ['default', 'warning', 'error', 'success', 'information']
                    }
                }
            }
        },
        type: 'object'
    };

    data: any = {
        properties: {
            dismissible: true,
            width: '100%',
            message: 'This is an alert message.',
            duration: 10000,
            mousePersist: true
        },
        modifier: {
            type: 'default'
        }
    };

    alertBasicExample: ExampleFile[] = [
        {
            language: 'html',
            scssFileCode: alertExampleScs,
            component: 'AlertExampleComponent',
            fileName: 'alert-example',
            code: alertExampleHtml,
            typescriptFileCode: alertExampleTs,
        },

    ];

    alertComponentContentExample: ExampleFile[] = [
        {
            language: 'html',
            fileName: 'alert-component-as-content-example',
            code: alertComponentAsContentExampleH,
            scssFileCode: alertComponentAsContentExampleScss
        },
        {
            language: 'typescript',
            fileName: 'alert-component-as-content-example',
            code: alertComponentAsContentExample,
            component: 'AlertComponentAsContentExampleComponent',

        },
        {
            language: 'typescript',
            code: alertContent,
            name: 'Alert Content',
            fileName: 'alert-content',
            secondFile: 'alert-content'
        },
        {
            language: 'typescript',
            code: alertComponentAsContentExampleModule,
            name: 'Module',
            module: 'app.module.ts'
        }

    ];

    alertInlineExample: ExampleFile[] = [
        {
            language: 'html',
            component: 'AlertInlineExampleComponent',
            scssFileCode: alertInlineExampleScs,
            fileName: 'alert-inline-example',
            code: alertInlineExampleHtml,
            typescriptFileCode: alertInlineExampleTs
        }
    ];

    alertWidthExample: ExampleFile[] = [
        {
            language: 'html',
            component: 'AlertWidthExampleComponent',
            code: alertWidthExampleHtml,
            fileName: 'alert-width-example',
            typescriptFileCode: alertWidthExampleTs,
            scssFileCode: alertWidthExampleScss
        }
    ];

    schema: Schema;

    constructor(
        private schemaFactory: SchemaFactoryService
    ) {
        this.schema = this.schemaFactory.getComponent('alert');
    }

    ngOnInit() { }
    onSchemaValues(data) {
        this.data = data;
    }
}
