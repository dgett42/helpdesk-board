export async function GET() {
  const tickets = [
    {
      id: 't-1001',
      title: 'Cannot connect to VPN',
      description: 'User reports intermittent VPN connectivity errors.',
      priority: 'Critical',
      status: 'Open',
      assignee: 'Unassigned',
      updatedAt: '2025-11-04T09:12:49Z',
    },
    {
      id: 't-1002',
      title: 'Email not syncing on mobile',
      description: 'Exchange account not syncing for iOS Mail.',
      priority: 'Medium',
      status: 'In Progress',
      assignee: 'Jordan',
      updatedAt: '2025-10-30T05:12:00Z',
    },
    {
      id: 't-1003',
      title: 'Laptop battery drains quickly',
      description:
        'Battery drops from 100% to 20% in under 2 hours when on Wi-Fi and Zoom.',
      priority: 'Low',
      status: 'Open',
      assignee: 'Unassigned',
      updatedAt: '2025-10-29T12:30:00Z',
    },
    {
      id: 't-1004',
      title: 'Okta MFA prompts repeatedly',
      description:
        'User receives MFA prompt every time they open a new tab. Suspected browser cookie issue.',
      priority: 'High',
      status: 'On Hold',
      assignee: 'Priya',
      updatedAt: '2025-10-28T09:21:00Z',
    },
    {
      id: 't-1005',
      title: 'Printer not responding on Floor 3',
      description:
        'Queue stuck and jobs timing out for Finance printer on Floor 3.',
      priority: 'Medium',
      status: 'Open',
      assignee: 'Unassigned',
      updatedAt: '2025-10-31T07:00:00Z',
    },
    {
      id: 't-1006',
      title: 'Teams screen share fails',
      description:
        'Sharing starts and then immediately stops for multiple users.',
      priority: 'High',
      status: 'Open',
      assignee: 'Alex',
      updatedAt: '2025-10-30T06:00:00Z',
    },
    {
      id: 't-1007',
      title: 'New hire account provisioning',
      description:
        'New hire arriving Monday missing software licenses in request.',
      priority: 'Critical',
      status: 'Open',
      assignee: 'Morgan',
      updatedAt: '2025-10-31T04:45:00Z',
    },
    {
      id: 't-1008',
      title: 'Wi-Fi drops in Conference Room A',
      description:
        'Signal drops every 10–15 minutes during video calls in Room A.',
      priority: 'Medium',
      status: 'Open',
      assignee: 'Unassigned',
      updatedAt: '2025-10-31T08:15:00Z',
    },
    {
      id: 't-1009',
      title: 'Locked out of Salesforce',
      description:
        'User locked out after multiple failed login attempts during client call.',
      priority: 'High',
      status: 'Resolved',
      assignee: 'Sam',
      updatedAt: '2025-10-29T10:05:00Z',
    },
    {
      id: 't-1010',
      title: 'Zoom audio echoes',
      description: 'Severe echo reported by multiple attendees on all-hands.',
      priority: 'Low',
      status: 'Open',
      assignee: 'Unassigned',
      updatedAt: '2025-10-27T06:00:00Z',
    },
    {
      id: 't-1011',
      title: 'Shared drive permissions',
      description:
        'Access denied errors for new project members on shared marketing drive.',
      priority: 'Medium',
      status: 'On Hold',
      assignee: 'Priya',
      updatedAt: '2025-10-30T13:45:00Z',
    },
    {
      id: 't-1012',
      title: 'Slack notifications delayed',
      description:
        'Messages notify several minutes late on Windows laptops only.',
      priority: 'Low',
      status: 'Open',
      assignee: 'Unassigned',
      updatedAt: '2025-10-31T05:55:00Z',
    },
    {
      id: 't-1013',
      title: 'macOS update failing',
      description:
        'Installer quits at 70% on multiple MacBook Pros used by design team.',
      priority: 'Critical',
      status: 'Open',
      assignee: 'Jordan',
      updatedAt: '2025-10-31T03:40:00Z',
    },
    {
      id: 't-1014',
      title: 'SFTP key rotation',
      description:
        'Rotate keys for finance integration before vendor deprecates old key.',
      priority: 'High',
      status: 'In Progress',
      assignee: 'Sam',
      updatedAt: '2025-10-31T09:05:00Z',
    },
    {
      id: 't-1015',
      title: 'Calendar invites not delivered',
      description:
        'Some attendees report not receiving recurring meeting invites.',
      priority: 'Medium',
      status: 'Open',
      assignee: 'Unassigned',
      updatedAt: '2025-10-31T08:25:00Z',
    },
    {
      id: 't-1016',
      title: 'Service account password expiry',
      description:
        'Legacy integration will fail if service account password not updated.',
      priority: 'High',
      status: 'Open',
      assignee: 'Unassigned',
      updatedAt: '2025-10-26T11:10:00Z',
    },
  ];

  return Response.json(tickets);
}
