import React from 'react';

const SwapResult = ({ fromToken, toToken, amountIn, amountOut }) => {
    return ( <
        div >
        <
        h2 > Swap Result < /h2> <
        p > From Token: { fromToken } < /p> <
        p > To Token: { toToken } < /p> <
        p > Amount In: { amountIn } < /p> <
        p > Amount Out: { amountOut } < /p> <
        /div>
    );
};

export default SwapResult;