import type {
    FullConfig, FullResult, Reporter, Suite, TestCase, TestResult, TestStep
} from '@playwright/test/reporter';

// Fuente: https://playwright.dev/docs/api/class-reporter#reporter-on-step-begin
class MyReporter implements Reporter {
    onBegin(config: FullConfig, suite: Suite) {
        console.log(`----- Iniciando ${suite.allTests().length} tests -----`);
    }

    onTestBegin(test: TestCase, result: TestResult) {}

    onStepBegin(test: TestCase, result: TestResult, step: TestStep) {}

    onStepEnd(test: TestCase, result: TestResult, step: TestStep) {}

    onTestEnd(test: TestCase, result: TestResult) {
        console.log(`Test '${test.title}' finalizado con el estado: ${result.status}`);
    }

    onEnd(result: FullResult) {
        console.log(`----- Ejecucion Finalizada con el estado: ${result.status} -----\n`);
    }
}

export default MyReporter;