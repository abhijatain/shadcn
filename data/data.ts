import type { SankeyNode } from '@unovis/ts'

export type Node = {
  id: string;
  label: string;
  value: number;
  subgroups: Node[];
  color?: string;
  expandable?: boolean;
  expanded?: boolean;
  lean?: string;
  channels?: string[];
}

export type Link = { source: string; target: string; value: number }

export type SankeyData<N extends Node, L extends Link> = {
  nodes: N[];
  links: L[];
  expand: (n: SankeyNode<N, L>) => void;
  collapse: (n: SankeyNode<N, L>) => void;
}

// Define the data with lean and news channels
const categories: Node[] = [
  {
    id: 'left',
    label: 'Left',
    color: '#ff0000',
    value: 20000,
    subgroups: [
      { id: 'left-0', label: 'The Hindu', value: Math.floor(Math.random() * 2000) + 500, subgroups: [] },
      { id: 'left-1', label: 'NDTV', value: Math.floor(Math.random() * 2000) + 500, subgroups: [] },
      { id: 'left-2', label: 'Indian Express', value: Math.floor(Math.random() * 2000) + 500, subgroups: [] },
      { id: 'left-3', label: 'The Quint', value: Math.floor(Math.random() * 2000) + 500, subgroups: [] },
      { id: 'left-4', label: 'HuffPost India', value: Math.floor(Math.random() * 2000) + 500, subgroups: [] },
      { id: 'left-5', label: 'The Wire', value: Math.floor(Math.random() * 2000) + 500, subgroups: [] },
      { id: 'left-6', label: 'Boom Live', value: Math.floor(Math.random() * 2000) + 500, subgroups: [] },
      { id: 'left-7', label: 'Alt News', value: Math.floor(Math.random() * 2000) + 500, subgroups: [] },
    ],
  },
  {
    id: 'center',
    label: 'Center',
    color: '#00ff00',
    value: 20000,
    subgroups: [
      { id: 'center-0', label: 'Times of India', value: Math.floor(Math.random() * 2000) + 500, subgroups: [] },
      { id: 'center-1', label: 'Hindustan Times', value: Math.floor(Math.random() * 2000) + 500, subgroups: [] },
      { id: 'center-2', label: 'Economic Times', value: Math.floor(Math.random() * 2000) + 500, subgroups: [] },
      { id: 'center-3', label: 'CNN-News18', value: Math.floor(Math.random() * 2000) + 500, subgroups: [] },
      { id: 'center-4', label: 'News18 India', value: Math.floor(Math.random() * 2000) + 500, subgroups: [] },
      { id: 'center-5', label: 'India Today', value: Math.floor(Math.random() * 2000) + 500, subgroups: [] },
      { id: 'center-6', label: 'Business Standard', value: Math.floor(Math.random() * 2000) + 500, subgroups: [] },
      { id: 'center-7', label: 'Mint', value: Math.floor(Math.random() * 2000) + 500, subgroups: [] },
    ],
  },
  {
    id: 'right',
    label: 'Right',
    color: '#0000ff',
    value: 20000,
    subgroups: [
      { id: 'right-0', label: 'Zee News', value: Math.floor(Math.random() * 2000) + 500, subgroups: [] },
      { id: 'right-1', label: 'Republic TV', value: Math.floor(Math.random() * 2000) + 500, subgroups: [] },
      { id: 'right-2', label: 'ABP News', value: Math.floor(Math.random() * 2000) + 500, subgroups: [] },
      { id: 'right-3', label: 'Aaj Tak', value: Math.floor(Math.random() * 2000) + 500, subgroups: [] },
      { id: 'right-4', label: 'DNA India', value: Math.floor(Math.random() * 2000) + 500, subgroups: [] },
      { id: 'right-5', label: 'NewsX', value: Math.floor(Math.random() * 2000) + 500, subgroups: [] },
      { id: 'right-6', label: 'Firstpost', value: Math.floor(Math.random() * 2000) + 500, subgroups: [] },
    ],
  },
]

const getNodes = (n: Node): Node[] => n.subgroups?.map((child, i) => ({
  ...child,
  id: `${n.id}-${i}`,
  color: child.color ?? n.color,
  expanded: false,
  expandable: child.subgroups?.length > 0,
}))

const getLinks = (n: Node): Link[] => n.subgroups.map(target => ({
  source: n.id,
  target: target.id,
  value: target.value,
}))

const generate = (n: Node): Node => ({ ...n, subgroups: getNodes(n) })

export const root: Node = generate({
  id: 'root',
  label: 'News Channel Leaning',
  value: 60000,
  expanded: true,
  expandable: true,
  subgroups: categories as Node[],
})

export const sankeyData: SankeyData<Node, Link> = {
  nodes: [root, ...root.subgroups],
  links: getLinks(root),
  expand: function (n: SankeyNode<Node, Link>): void {
    n.subgroups = getNodes(n)
    const index = this.nodes.findIndex(node => node.id === n.id)
    this.nodes[index].expanded = true
    this.nodes = this.nodes.concat(n.subgroups)
    this.links = this.links.concat(getLinks(n))
  },
  collapse: function (n: SankeyNode<Node, Link>): void {
    const index = this.nodes.findIndex(node => node.id === n.id)
    this.nodes[index].expanded = false
    this.nodes = this.nodes.filter(d => d.id === n.id || !d.id.startsWith(n.id))
    this.links = this.links.filter(d => !d.source.startsWith(n.id))
  },
}

  