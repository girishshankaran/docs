const releases = require('./releases.json');

const variables = {
  releaseTitle: 'v3.25.0',
  prodname: 'Calico',
  prodnamedash: 'calico',
  version: 'v3.25',
  baseUrl: '/calico/3.25',
  filesUrl: 'https://projectcalico.docs.tigera.io/v3.25',
  tutorialFilesURL: 'https://unified-docs.tigera.io/files',
  calicoReleasesURL: 'https://github.com/projectcalico/calico/releases/download/',
  prodnameWindows: 'Calico for Windows',
  nodecontainer: 'calico/node',
  noderunning: 'calico-node',
  rootDirWindows: 'C:\\CalicoWindows',
  ppa_repo_name: 'calico-3.25.0',
  manifestsUrl: 'https://raw.githubusercontent.com/projectcalico/calico/v3.25.0',
  releases,
  registry: '',
  vppbranch: 'master',
  tigeraOperator: releases[0]['tigera-operator'],
  tigeraOperatorVersionShort: releases[0]['tigera-operator'].version.split('.').slice(0, 2).join('.'),
  imageNames: {
    'calico/node': 'calico/node',
    calicoctl: 'calico/ctl',
    typha: 'calico/typha',
    'calico/cni': 'calico/cni',
    'calico/apiserver': 'calico/apiserver',
    'calico/kube-controllers': 'calico/kube-controllers',
    'calico-upgrade': 'calico-upgrade',
    'calico/windows': 'calico/windows',
    flannel: 'docker.io/flannelcni/flannel',
    flannelMigration: 'calico/flannel-migration-controller',
    'calico/dikastes': 'calico/dikastes',
    'pilot-webhook': 'calico/pilot-webhook',
    flexvol: 'calico/pod2daemon-flexvol',
    'csi-driver': 'calico/csi',
    'csi-node-driver-registrar': 'calico/node-driver-registrar',
  },
};

module.exports = variables;
