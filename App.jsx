
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ProductionSchedulerApp = () => {
    const initialTasks = [
        { id: 1, title: 'W0001111', product: 'Blueberry PR', type: 'Infusion', quantity: 20000, startDate: '2025-05-06', endDate: '2025-05-08', room: 'Room 1', status: 'Planned' },
        { id: 2, title: 'W0001112', product: 'Mango PR', type: 'Packaging', quantity: 15000, startDate: '2025-05-07', endDate: '2025-05-09', room: 'Room 2', status: 'In Progress' },
        { id: 3, title: 'W0001113', product: 'Grape PR', type: 'Labelling', quantity: 10000, startDate: '2025-05-08', endDate: '2025-05-10', room: 'Room 3', status: 'Completed' },
        { id: 4, title: 'W0001114', product: 'Pineapple PR', type: 'Master Casing', quantity: 8000, startDate: '2025-05-09', endDate: '2025-05-11', room: 'Room 4', status: 'On Hold' }
    ];

    const [tasks, setTasks] = useState(initialTasks);

    const moveTask = (id, newStatus) => {
        const updatedTasks = tasks.map(task =>
            task.id === id ? { ...task, status: newStatus } : task
        );
        setTasks(updatedTasks);
    };

    const statuses = ['Planned', 'In Progress', 'Completed', 'On Hold'];

    return (
        <div className="flex flex-wrap p-6 bg-gray-100 min-h-screen">
            {statuses.map(status => (
                <div key={status} className="flex-1 m-4 p-4 bg-white rounded-2xl shadow-lg min-w-[250px] max-w-[300px]">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-800">{status}</h2>
                    {tasks.filter(task => task.status === status).map(task => (
                        <Card key={task.id} className="mb-4">
                            <CardContent>
                                <h3 className="text-lg font-semibold">{task.title}</h3>
                                <p>Product: {task.product}</p>
                                <p>Type: {task.type}</p>
                                <p>Quantity: {task.quantity}</p>
                                <p>Room: {task.room}</p>
                                <p>Start Date: {task.startDate}</p>
                                <p>End Date: {task.endDate}</p>
                                <Button className="mt-2 bg-blue-600 text-white w-full" onClick={() => moveTask(task.id, statuses[(statuses.indexOf(task.status) + 1) % statuses.length])}>
                                    Move to Next Stage
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default ProductionSchedulerApp;
