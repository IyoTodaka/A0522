import React, {useMemo, useCallback} from 'react'

const MemoCallbackDemo = () => {
    const sayWoof = () => "wanwanwanwanwan!!!"

    const useMemoResult = useMemo(sayWoof, [])
    const useCallbackResult = useCallback(sayWoof, [])

    console.log('useMemoResult: ',useMemoResult);
    console.log('useCallbackResult: ', useCallbackResult);

    return <p>just want to return something</p>
}

export default MemoCallbackDemo