import init, { Game } from "./wasm/engine.js"

async function run() {
    await init();

    const game = new Game();
    game.move_by(1, 2);

    console.log("Player: ", game.pos_x(), game.pos_y());
}

run();