export default function createPathToHero(
    x, // enemy x
    y, // enemy y
    targetX, // hero x
    targetY, // hero y
    checkBlock, // point.checkWallBlock(x,y)
    map, // point.map
    path
) {
    var waitingNodes = [],
        checkedNodes = [],
        startPosition = {},
        targetPosition = {},
        nodeForCheck = null

    startPosition.x = x
    startPosition.y = y

    targetPosition.x = targetX
    targetPosition.y = targetY

    if (startPosition == targetPosition) return

    startPosition = createPropertyNode(
        startPosition,
        targetX,
        targetY,
        checkBlock,
        map,
        null
    )

    waitingNodes.push(
        ...getNeighbors(startPosition, map, targetX, targetY, checkBlock)
    )
    // waitingNodes =[{x: 13, y: 15}, {x: 15, y: 15}, {x: 14, y: 16} ...]

    while (waitingNodes.length > 0) {
        nodeForCheck = waitingNodes.find((el) => {
            return (
                el.weightNode ==
                Math.min(...waitingNodes.map((el) => el.weightNode))
            )
        })

        if (nodeForCheck.x == targetX && nodeForCheck.y == targetY) {
            return calculatePathToTarget(nodeForCheck, path)
        }

        const index = waitingNodes.indexOf(nodeForCheck)
        waitingNodes.splice(index, 1)

        if (
            !checkedNodes.find(
                (el) => el.x == nodeForCheck.x && el.y == nodeForCheck.y
            )
        ) {
            checkedNodes.push(nodeForCheck)
            waitingNodes.push(
                ...getNeighbors(nodeForCheck, map, targetX, targetY, checkBlock)
            )
        }
    }
}

function createPropertyNode(
    pos,
    targetX,
    targetY,
    checkBlock,
    map,
    parentNode
) {
    pos.checkBlock = checkBlock
    pos.map = map
    pos.distToStart = pos.x + pos.y
    pos.distToTarget = Math.abs(targetX - pos.x) + Math.abs(targetY - pos.y)
    pos.weightNode = pos.distToStart + pos.distToTarget
    pos.parentNode = parentNode
    return pos
}

function getNeighbors(position, map, targetX, targetY, checkBlock) {
    var neigh = []
    var newLeft = {},
        newRight = {},
        newTop = {},
        newBottom = {}
    if (
        position.x - 1 >= 0 &&
        !position.checkBlock(position.x - 1, position.y)
    ) {
        newLeft.x = position.x - 1
        newLeft.y = position.y
        neigh.push(
            createPropertyNode(
                newLeft,
                targetX,
                targetY,
                checkBlock,
                map,
                position
            )
        )
    }

    if (
        position.x + 1 <= map.sizes.width &&
        !position.checkBlock(position.x + 1, position.y)
    ) {
        newRight.x = position.x + 1
        newRight.y = position.y
        neigh.push(
            createPropertyNode(
                newRight,
                targetX,
                targetY,
                checkBlock,
                map,
                position
            )
        )
    }

    if (
        position.y - 1 >= 0 &&
        !position.checkBlock(position.x, position.y - 1)
    ) {
        newTop.x = position.x
        newTop.y = position.y - 1
        neigh.push(
            createPropertyNode(
                newTop,
                targetX,
                targetY,
                checkBlock,
                map,
                position
            )
        )
    }
    if (
        position.y + 1 <= map.sizes.height &&
        !position.checkBlock(position.x, position.y + 1)
    ) {
        newBottom.x = position.x
        newBottom.y = position.y + 1
        neigh.push(
            createPropertyNode(
                newBottom,
                targetX,
                targetY,
                checkBlock,
                map,
                position
            )
        )
    }
    return neigh
}

function calculatePathToTarget(node, path) {
    while (node.parentNode != null) {
        path.push({ x: node.x, y: node.y })
        node = node.parentNode
    }
    return path
}
