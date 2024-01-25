export async function sayHello(name: string): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Hello, ${name}!`);
    }, 1000);
  });
}

async function main() {
  const result = await sayHello('World');
  console.log(result);
}

main();
